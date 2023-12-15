import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Units } from './config/interface/unit';

@Injectable({
  providedIn: 'root',
})
export class UnitsService {
  apiUrl = './../../assets/data/api/';
  units$ = new BehaviorSubject<Units[]>([]);

  constructor(private http: HttpClient) {}

  get unitList() {
    return this.units$.value;
  }
  fetchUnits() {
    return new Observable<Units[]>((subscriber) => {
      this.http.get<Units[]>(`${this.apiUrl}./units.json`).subscribe({
        next: (units) => {
          if (!units) {
            subscriber.error();
            subscriber.complete();
            return;
          }
          this.units$.next(units);
          subscriber.next(units);
          subscriber.complete();
        },
        error: (error) => {
          subscriber.error(error);
          subscriber.complete();
        },
      });
    });
  }
}
