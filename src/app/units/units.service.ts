import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Units } from './config/interface/unit';

@Injectable({
  providedIn: 'root',
})
export class UnitsService {
  apiUrl = './../../assets/data/api/';

  constructor(private http: HttpClient) {}

  fetchUnits() {
    return new Observable<Units[]>((subscriber) => {
      this.http.get<Units[]>(`${this.apiUrl}./units.json`).subscribe({
        next: (units) => {
          if (!units) {
            subscriber.error();
            subscriber.complete();
            return;
          }
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
