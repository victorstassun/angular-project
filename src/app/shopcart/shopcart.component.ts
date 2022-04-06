import { Component } from '@angular/core';
import { Products } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.scss']
})

export class ShopcartComponent {

  products: Products[];
  items = this.productsService.getItems();

  constructor(private productsService: ProductsService) { }

  clearCart() {
    this.productsService.clearCart();
    window.alert('Items was removed!');
  }
}
