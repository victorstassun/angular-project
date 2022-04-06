import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Shopcart } from './shopcart';

@Injectable({
  providedIn: 'root'
})
export class ShopcartService {

  private readonly APIcart = `${environment.API}shopcarts`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Shopcart[]>(this.APIcart)
      .pipe(
        tap(console.log)
      )
  };
}
