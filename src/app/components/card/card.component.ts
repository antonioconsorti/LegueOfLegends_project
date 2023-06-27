import { Component, Input, OnInit } from '@angular/core';
import { Champion } from 'src/app/models/champion.model';
import { ChamiponService } from 'src/app/services/champion.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{

  ngOnInit(): void {
    console.log(this.champions)
  }

  @Input() champions: Champion[];

}
