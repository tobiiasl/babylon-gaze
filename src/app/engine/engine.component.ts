import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {getGaze} from '../gaze';
import { EngineService } from './engine.service';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html'
})
export class EngineComponent implements OnInit {

  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  public constructor(private engServ: EngineService) { }

  public ngOnInit(): void {
    this.engServ.createScene(this.rendererCanvas);
    this.engServ.animate();
    getGaze('tg03b-080200005381.local').subscribe(console.log);
  }
}
