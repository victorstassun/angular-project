import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.scss']
})

export class ShopcartComponent {

  items = this.productsService.getItems();

  constructor(
    private productsService: ProductsService
  ) { }
}
