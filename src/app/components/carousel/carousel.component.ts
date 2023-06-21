import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  percorso = '../assets/img/coloreSfondo.png';
  images = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    }
  ];}
