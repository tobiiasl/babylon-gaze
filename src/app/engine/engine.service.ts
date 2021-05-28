import { WindowRefService } from './../services/window-ref.service';
import { ElementRef, Injectable, NgZone } from '@angular/core';
import {
  Engine,
  FreeCamera,
  Scene,
  Mesh,
  Color3,
  Vector3,
  HemisphericLight,
  StandardMaterial,
  Texture,
  Color4
} from '@babylonjs/core';
import { getGaze } from '../gaze';
import { EyePair } from './eye-pair';


@Injectable({ providedIn: 'root' })
export class EngineService {
  private canvas: HTMLCanvasElement;
  private engine: Engine;
  private camera: FreeCamera;
  private scene: Scene;

  public constructor(
    private ngZone: NgZone,
    private windowRef: WindowRefService
  ) { }


  public createScene(canvas: ElementRef<HTMLCanvasElement>, host: string): void {
    // The first step is to get the reference of the canvas element    from our HTML document
    this.canvas = canvas.nativeElement;

    // Then, load the Babylon 3D engine:
    this.engine = new Engine(this.canvas, true);

    // This creates a basic Babylon Scene object (non-mesh)
    this.scene = new Scene(this.engine);
    this.scene.clearColor = new Color4(0, 0, 0, 0);

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

    var plane = Mesh.CreatePlane("face", 12, this.scene);
    plane.position = new Vector3(0, -0.7, -0.8);
    var material = new StandardMaterial("facetexture", this.scene);
    material.diffuseTexture = new Texture("assets/me.jpg", this.scene);
    material.diffuseTexture.scale(1.0);
    plane.material = material;


    var eyePair = new EyePair(new Color3(0, 0.85, 1), this.scene);

    eyePair.eyesSetPosition(new Vector3(0, 0, 0));

    let flyposition = new Vector3(0, 0, -10);

    const scaleFactor = 1.7 / 59;

    getGaze(host).subscribe(
      (gaze: any) => {
        flyposition = new Vector3(gaze[0], gaze[1], -gaze[2]).scale(scaleFactor);
      }
    );

    setInterval(() => {
      eyePair.eyesLookAt(flyposition);
    }, 1000 / 60);
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
