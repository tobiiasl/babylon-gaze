import {
  Scene,
  Mesh,
  MeshBuilder,
  Color3,
  Vector3,
  StandardMaterial,
} from '@babylonjs/core';

interface EyePairMeshes {
  left: Mesh;
  right: Mesh;
}

export class EyePair {
  private readonly eyePairMeshes: EyePairMeshes;

  constructor(color: Color3, scene: Scene) {
    this.eyePairMeshes = this.createEyePairMeshes(color, scene);
  }

  public eyesSetPosition(position: Vector3) {
    const eyes = this.eyePairMeshes;
    var origoDistance = Math.abs(eyes.left.position.x - eyes.right.position.x);
    var leftX = position.x - origoDistance / 2;
    var rightX = position.x + origoDistance / 2;

    eyes.left.position = new Vector3(leftX, position.y, position.z);
    eyes.right.position = new Vector3(rightX, position.y, position.z);
  }

  public eyesLookAt(point: Vector3) {
    const eyes = this.eyePairMeshes;
    this.eyeLookAt(eyes.left, point);
    this.eyeLookAt(eyes.right, point);
  }

  private eyeLookAt(eye: Mesh, point: Vector3) {
    var gazeVector = point.subtract(eye.position);
    var alpha = Math.atan2(gazeVector.y, -gazeVector.z);
    var beta = Math.atan2(gazeVector.x, -gazeVector.z);

    eye.rotation = new Vector3(alpha, -beta);
  }

  private createEye(color: Color3, radius: number, scene: Scene): Mesh {
    var eyeball = MeshBuilder.CreateSphere("eyeball", { diameter: 2 * radius, segments: 16 }, scene);

    // const eyeballmaterial = new CellMaterial("eyeballmaterial", scene);
    const eyeballmaterial = new StandardMaterial("eyeballmaterial", scene);
    eyeballmaterial.diffuseColor = Color3.White();
    eyeball.material = eyeballmaterial;

    var iris = MeshBuilder.CreateSphere("pupil", { diameter: 2 * 0.4 * radius, segments: 8 }, scene);
    iris.position.z = -radius * .97;
    iris.scaling.z = 0.05;  // Make it flat

    const irismaterial = new StandardMaterial("irismaterial", scene);
    irismaterial.diffuseColor = color;
    iris.material = irismaterial;

    var pupil = MeshBuilder.CreateSphere("pupil", { diameter: 2 * 0.2 * radius, segments: 16 }, scene);
    pupil.position.z = -radius * 1;
    pupil.scaling.z = 0.1;  // Make it flat

    const pupilmaterial = new StandardMaterial("pupilmaterial", scene);
    pupilmaterial.disableLighting = true;
    pupilmaterial.diffuseColor = Color3.Black();
    pupil.material = pupilmaterial;

    var eye = Mesh.MergeMeshes([eyeball, iris, pupil], true, true, undefined, false, true);
    return eye;
  }

  private createEyePairMeshes(color: Color3, scene: Scene): EyePairMeshes {
    var radius = 1;
    var left = this.createEye(color, radius, scene);
    var right = this.createEye(color, radius, scene);

    var distanceBetweenEyes = 1.7 * radius;
    left.position.x = -distanceBetweenEyes;
    right.position.x = distanceBetweenEyes;
    return { left, right };
  }
}
