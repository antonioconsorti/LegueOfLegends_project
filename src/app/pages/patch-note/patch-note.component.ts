import { Component } from '@angular/core';
import { Champion } from 'src/app/models/champion.model';
import { ChampionService } from 'src/app/services/champion.service';
import { random } from 'lodash';

@Component({
  selector: 'app-patch-note',
  templateUrl: './patch-note.component.html',
  styleUrls: ['./patch-note.component.scss']
})
export class PatchNoteComponent {
  champions: Champion[];

  randomChampion: Champion;
  guessName: string;
  isCorrect: boolean;

  constructor(private championService: ChampionService){}

  ngOnInit(): void {
    this.onGetChampions();
  }

  onGetChampions(){
    this.championService.getChampions().subscribe({
      next: (res) => {
        this.champions = res;
        this.getRandomChampion();
      },
      error: (e) => {
        console.log(e)
      }
    })
  }

  getRandomChampion(): void {
    const randomIndex = random(0, this.champions.length - 1);
    this.randomChampion = this.champions[randomIndex];
  }

  checkGuess(): void {
    const guessName1 = this.guessName.toLowerCase().split(',')[0].trim();
    const randomChampionName1 = this.randomChampion.name.toLowerCase().split(',')[0].trim();

    if (guessName1 === randomChampionName1) {
      this.isCorrect = true;
    } else {
      this.isCorrect = false;
    }
  }
}
