import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from './product';
import { take, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  items: Products[] = [];

  private readonly API = `${environment.API}products`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Products[]>(this.API)
      .pipe(
        tap(console.log)
      );
  }

  create(product: any) {
    return this.http.post(this.API, product).pipe(take(1));
  }

  addToCart(product: Products) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
