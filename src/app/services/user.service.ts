import { Injectable } from '@angular/core';
import { ReplaySubject, Subject, Observable, BehaviorSubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { USERS } from '../mocks/user.mocks';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  datiUtente = new ReplaySubject();

  ruoloUtente = new ReplaySubject();
  ruolo: string;

  apiBaseUrl = 'api/users';

  constructor(private http: HttpClient) { }

  getRole(): any {
    // return this.ruoloUtente;
    return of (USERS); //mock
  }

  insertUser(user: any): Observable<any> {
    // return this.http.post<any>(`${this.apiBaseUrl}/signup`, user)
    USERS.push(user); //mock
    return of (USERS); //mock
  }

  getUser(email: string): Observable<any> {
    const dati = USERS.find(res => res.email === email);
    return of (dati); //mock
    // const dati =  { email: email}
    // return this.http.post<any>(`${this.apiBaseUrl}/user`, dati);
  }}
