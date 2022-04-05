import { Component, OnInit } from '@angular/core';
import { Products } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  products: Products[];

  constructor(private service: ProductsService) { }

  ngOnInit() {
    this.service.list().subscribe(
      dados => this.products = dados
    );
  }
}