import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Champion } from 'src/app/models/champion.model';
import { ChampionService } from 'src/app/services/champion.service';

@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.scss']
})
export class ChampionDetailComponent implements OnInit{

  champion: Champion;

  constructor(
    private championService: ChampionService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ){}

  ngOnInit(): void {
    this.onGetChampion();
  }

  onGetChampion(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.championService.getChampion(id).pipe(
      take(1)
      ).subscribe({
        next: (res) => {
        this.champion = res;
      },
      error: (e) => console.log(e)
    })
  }
}
