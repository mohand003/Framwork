import { Component } from '@angular/core';

import { flush } from '@angular/core/testing';
import { modelComponent } from '../model/model.component';

interface Projects {
  id: number;
  imgUrl: string;
  title: string;
}
@Component({
  selector: 'app-portfolio',
  imports: [modelComponent],
  templateUrl: './porfolio.component.html',
  styleUrl: './porfolio.component.css',
})
export class PortfolioComponent {
  projects: Projects[] = [
    {
      id: 1,
      title: 'first-Project',
      imgUrl:
        'https://routeegy.github.io/startFramework/assets/images/poert1.png',
    },
    {
      id: 2,
      title: 'second-Project',
      imgUrl:
        'https://routeegy.github.io/startFramework/assets/images/port2.png',
    },
    {
      id: 3,
      title: 'third-Project',
      imgUrl:
        'https://routeegy.github.io/startFramework/assets/images/port3.png',
    },
    {
      id: 4,
      title: 'fourth-Project',
      imgUrl:
        'https://routeegy.github.io/startFramework/assets/images/poert1.png',
    },
    {
      id: 5,
      title: 'fifth-Project',
      imgUrl:
        'https://routeegy.github.io/startFramework/assets/images/port2.png',
    },
    {
      id: 6,
      title: 'sixth-Project',
      imgUrl:
        'https://routeegy.github.io/startFramework/assets/images/port3.png',
    },
  ];
  isClicked: boolean = false;
  modelImage: string = '';
  imageAlt: string = '';
  dataFromChild: any;
  showmodel(image: string, alt: string): void {
    this.isClicked = true;
    this.modelImage = image;
    this.imageAlt = alt;
  }
  hidemodel(): void {
    this.isClicked = false;
  }
}
