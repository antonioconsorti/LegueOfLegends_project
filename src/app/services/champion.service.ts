import { Injectable } from '@angular/core';
import { Champion } from '../models/champion.model';
import { CHAMPIONS } from '../mocks/champion.mocks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChamiponService {

  constructor() { }

  getChampions(): Observable<Champion[]>{
    return of (CHAMPIONS);
  }
  getChampion(id: number): Observable<Champion> {
    const champion = CHAMPIONS.find(ricetta => ricetta.id === id);
    return of (champion);
  }
}
