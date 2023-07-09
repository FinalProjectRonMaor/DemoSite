import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

  public options: AnimationOptions = {
    path: '/assets/loader-animation.json',
  };

  constructor() {
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}