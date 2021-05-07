import { WindowRefService } from './../services/window-ref.service';
import {ElementRef, Injectable, NgZone} from '@angular/core';
import {
  Engine,
  FreeCamera,
  Scene,
  Light,
  Mesh,
  MeshBuilder,
  Color3,
  Vector3,
  HemisphericLight,
  StandardMaterial,
  DynamicTexture,
} from '@babylonjs/core';
import {getGaze} from '../gaze';

interface EyePair {
  left: Mesh;
  right: Mesh;
}
@Injectable({ providedIn: 'root' })
export class EngineService {
  private canvas: HTMLCanvasElement;
  private engine: Engine;
  private camera: FreeCamera;
  private scene: Scene;
  private light: Light;

  private sphere: Mesh;

  public constructor(
    private ngZone: NgZone,
    private windowRef: WindowRefService
  ) {}


  public createScene(canvas: ElementRef<HTMLCanvasElement>, host: string): void {
    // The first step is to get the reference of the canvas element    from our HTML document
    this.canvas = canvas.nativeElement;

    // Then, load the Babylon 3D engine:
    this.engine = new Engine(this.canvas,  true);

    // This creates a basic Babylon Scene object (non-mesh)
    this.scene = new Scene(this.engine);

    // This creates and positions a free camera (non-mesh)
    this.camera = new FreeCamera("camera1", new Vector3(0, 0, -20), this.scene);

    // This targets the camera to scene origin
    this.camera.setTarget(Vector3.Zero());

    // This attaches the camera to the canvas
    this.camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new HemisphericLight("light1", new Vector3(-1, 1, -1), this.scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 1;

    var eyes1 = this.createEyePair(new Color3(0, 0.85, 1), this.scene);

    this.eyesSetPosition(eyes1, new Vector3(0, 0, 0));

    let flyposition = new Vector3(1, 0, -3);

    const scaleFactor = 1.7 / 59;

    getGaze(host).subscribe(
      (gaze: any) => {
        flyposition = new Vector3(gaze[0], gaze[1], -gaze[2]).scale(scaleFactor);
      }
    );

    var index = 0;
    setInterval(() => {
      index++;
      var speed = 0.3;
      this.eyesLookAt(eyes1, flyposition);
    }, 1000/60);
  }

  public eyesSetPosition(eyes: EyePair, position: Vector3) {
      var origoDistance = Math.abs(eyes.left.position.x - eyes.right.position.x);
      var leftX = position.x - origoDistance / 2;
      var rightX = position.x + origoDistance / 2;

      eyes.left.position = new Vector3(leftX, position.y, position.z);
      eyes.right.position = new Vector3(rightX, position.y, position.z);
  }

  public eyesLookAt(eyes: EyePair, point: Vector3) {
      this.eyeLookAt(eyes.left, point);
      this.eyeLookAt(eyes.right, point);
  }

  public eyeLookAt(eye: Mesh, point: Vector3) {
      var gazeVector = point.subtract(eye.position);
      var alpha = Math.atan2(gazeVector.y, -gazeVector.z);
      var beta = Math.atan2(gazeVector.x, -gazeVector.z);

      eye.rotation = new Vector3(alpha, -beta);
  }

  public createEye(color: Color3, radius: number, scene: Scene): Mesh {
      var eyeball = MeshBuilder.CreateSphere("eyeball", {diameter: 2 * radius, segments: 16}, scene);

      // const eyeballmaterial = new CellMaterial("eyeballmaterial", scene);
      const eyeballmaterial = new StandardMaterial("eyeballmaterial", scene);
      eyeballmaterial.diffuseColor = Color3.White();
      eyeball.material = eyeballmaterial;

      var iris = MeshBuilder.CreateSphere("pupil", {diameter: 2* 0.4 * radius, segments: 8}, scene);
      iris.position.z = -radius*.97;
      iris.scaling.z = 0.05;  // Make it flat

      const irismaterial = new StandardMaterial("irismaterial", scene);
      irismaterial.diffuseColor = color;
      iris.material = irismaterial;

      var pupil = MeshBuilder.CreateSphere("pupil", {diameter: 2* 0.2 * radius, segments: 16}, scene);
      pupil.position.z = -radius*1;
      pupil.scaling.z = 0.1;  // Make it flat

      const pupilmaterial = new StandardMaterial("pupilmaterial", scene);
      pupilmaterial.disableLighting = true;
      pupilmaterial.diffuseColor = Color3.Black();
      pupil.material = pupilmaterial;

      var eye = Mesh.MergeMeshes([eyeball, iris, pupil], true, true, undefined, false, true);
      return eye;
  }

  public createEyePair(color: Color3, scene: Scene) : EyePair {
      var radius = 1;
      var left = this.createEye(color, radius, scene);
      var right = this.createEye(color, radius, scene);

      var distanceBetweenEyes = 1.7 * radius;
      left.position.x = -distanceBetweenEyes;
      right.position.x = distanceBetweenEyes;

      return {left, right};
  }

  public animate(): void {
    // We have to run this outside angular zones,
    // because it could trigger heavy changeDetection cycles.
    this.ngZone.runOutsideAngular(() => {
      const rendererLoopCallback = () => {
        this.scene.render();
      };

      if (this.windowRef.document.readyState !== 'loading') {
        this.engine.runRenderLoop(rendererLoopCallback);
      } else {
        this.windowRef.window.addEventListener('DOMContentLoaded', () => {
          this.engine.runRenderLoop(rendererLoopCallback);
        });
      }

      this.windowRef.window.addEventListener('resize', () => {
        this.engine.resize();
      });
    });
  }

}
