import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SignUp } from './config/interface/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = './../../assets/data/api/';

  constructor(private http: HttpClient) {}

  signIn(dto: SignUp) {
    return new Observable<SignUp>((subscriber) => {
      this.http.get<SignUp[] | null>(`${this.apiUrl}./admin.json`).subscribe({
        next: (users) => {
          if (!users) {
            subscriber.error();
            subscriber.complete();
            return;
          }
          const user: SignUp | undefined = users.find((u: SignUp) => {
            return u.email === dto.email && u.password === dto.password;
          });

          if (user) {
            subscriber.next(user);
            subscriber.complete();
          } else {
            subscriber.error();
            subscriber.complete();
            return;
          }
        },
        error: (error) => {
          subscriber.error(error);
          subscriber.complete();
        },
      });
    });
  }
}
