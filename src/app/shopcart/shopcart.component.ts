import { Component, OnInit } from '@angular/core';
import { Shopcart } from '../shopcart';
import { ShopcartService } from '../shopcart.service';

@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.scss']
})

export class ShopcartComponent implements OnInit {

  shopcarts: Shopcart[];

  constructor(private service: ShopcartService) { }

  ngOnInit() {
    this.service.list().subscribe(
      dados => this.shopcarts = dados
    )
  }
}
