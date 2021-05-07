import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {getGaze} from '../gaze';
import { EngineService } from './engine.service';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html'
})
export class EngineComponent implements OnInit {

  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  public constructor(private engServ: EngineService,
    // private route: ActivatedRoute
    ) { }

  public ngOnInit(): void {
    const path = window.location.pathname;
    const host = path.split('/').pop();
    if(host.length === 0) {
      console.error('No RU host name specified. Add e.g. /tg03b-080200100361.local or /192.168.75.51 to the url ');
    }

    console.log(`Connecting to "${host}"`);

    this.engServ.createScene(this.rendererCanvas, host);
    this.engServ.animate();
  }
}
