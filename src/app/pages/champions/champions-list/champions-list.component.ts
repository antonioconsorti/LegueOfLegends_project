import { Component, OnInit } from '@angular/core';
import { Champion } from 'src/app/models/champion.model';
import { ChamiponService } from 'src/app/services/champion.service';

@Component({
  selector: 'app-champions-list',
  templateUrl: './champions-list.component.html',
  styleUrls: ['./champions-list.component.scss']
})
export class ChampionsListComponent implements OnInit{
  champions: Champion[];

  constructor(private championService: ChamiponService){}

  ngOnInit(): void {
    this.onGetChampions();
  }

  onGetChampions(){
    this.championService.getChampions().subscribe({
      next: (res) => {
        this.champions = res;
      },
      error: (e) => {
        console.log(e)
      }
    })
  }
}
