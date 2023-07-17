import { Injectable } from '@angular/core';
import { Champion } from '../models/champion.model';
import { CHAMPIONS } from '../mocks/champion.mocks';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  apiBaseUrl = 'api/champions';

  constructor(private http: HttpClient) { }

  getChampions(): Observable<Champion[]>{
    return of (CHAMPIONS);
    // return this.http.get<Champion[]>(`${this.apiBaseUrl}/`)
  }
  getChampion(id: number): Observable<Champion> {
    const champion = CHAMPIONS.find(champion => champion._id === id);
    return of (champion);
    // return this.http.get<Champion>(`${this.apiBaseUrl}/${id}`);
  }
  createChampion(championData: any): Observable<any> {
    // return this.http.post<any>(`${this.apiBaseUrl}/`, championData);
    CHAMPIONS.push(championData); //mock
    return of (CHAMPIONS); //mock
  }

  updateChampion(id: number, champion: Champion): Observable<any> {
    for (let i = 0; i < CHAMPIONS.length; i++) {
      if (CHAMPIONS[i]._id === id) {
        CHAMPIONS[i] = champion;
        break;
      }
    }
    return of (CHAMPIONS);
  }

  deleteChampion(champion: Champion): Observable<any> {
    const updatedChampion = CHAMPIONS.filter(champ => champ._id !== champion._id);
    CHAMPIONS.length = 0;
    CHAMPIONS.push(...updatedChampion);
    return of(CHAMPIONS);
  }
}
