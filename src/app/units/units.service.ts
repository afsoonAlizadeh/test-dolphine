import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action, CategoryTree, Products, Role } from './config/interface/role';

@Injectable({
  providedIn: 'root',
})
export class UnitsService {
  apiUrl = './../../assets/data/api/';

  constructor(private http: HttpClient) {}

  fetchRole() {
    return new Observable<Role[]>((subscriber) => {
      this.http.get<Role[]>(`${this.apiUrl}./addRolePaylod.json`).subscribe({
        next: (roles) => {
          if (!roles) {
            subscriber.error();
            subscriber.complete();
            return;
          }
          subscriber.next(roles);
          subscriber.complete();
        },
        error: (error) => {
          subscriber.error(error);
          subscriber.complete();
        },
      });
    });
  }

  fetchProducts() {
    return new Observable<Products[]>((subscriber) => {
      this.http.get<Products[]>(`${this.apiUrl}./products.json`).subscribe({
        next: (products) => {
          if (!products) {
            subscriber.error();
            subscriber.complete();
            return;
          }
          subscriber.next(products);
          subscriber.complete();
        },
        error: (error) => {
          subscriber.error(error);
          subscriber.complete();
        },
      });
    });
  }

  fetchCategoriesTree() {
    return new Observable<CategoryTree[]>((subscriber) => {
      this.http
        .get<CategoryTree[]>(`${this.apiUrl}./categoriesTree.json`)
        .subscribe({
          next: (categoryTree) => {
            if (!categoryTree) {
              subscriber.error();
              subscriber.complete();
              return;
            }
            subscriber.next(categoryTree);
            subscriber.complete();
          },
          error: (error) => {
            subscriber.error(error);
            subscriber.complete();
          },
        });
    });
  }

  fetchActions() {
    return new Observable<Action[]>((subscriber) => {
      this.http.get<Action[]>(`${this.apiUrl}./actions.json`).subscribe({
        next: (actions) => {
          if (!actions) {
            subscriber.error();
            subscriber.complete();
            return;
          }
          subscriber.next(actions);
          subscriber.complete();
        },
        error: (error) => {
          subscriber.error(error);
          subscriber.complete();
        },
      });
    });
  }

  setRole(role: Role) {
    return new Observable<Role>((subscriber) => {
      this.http
        .post<Role>(`${this.apiUrl}./addRolePaylod.json`, role)
        .subscribe({
          next: (res) => {
            subscriber.next(res);
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
