import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  products: Products[];

  constructor(private service: ProductsService, private productService: ProductsService) { }

  ngOnInit() {
    this.service.list().subscribe(
      dados => this.products = dados
    );
  }

  addToCart(product: Products) {
    this.productService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}