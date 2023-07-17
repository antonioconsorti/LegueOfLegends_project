import { Component, OnInit } from '@angular/core';
import { Champion } from 'src/app/models/champion.model';
import { ChampionService } from 'src/app/services/champion.service';

@Component({
  selector: 'app-champions-list',
  templateUrl: './champions-list.component.html',
  styleUrls: ['./champions-list.component.scss']
})
export class ChampionsListComponent implements OnInit{
  champions: Champion[] = [];

  constructor(private championService: ChampionService) {}

  ngOnInit(): void {
    this.onGetChampions();
  }

  onGetChampions(): void {
    this.championService.getChampions().subscribe({
      next: (res) => {
        this.champions = res;
        this.sortChampionsByName();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  private sortChampionsByName(): void {
    this.champions.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
  }
}
