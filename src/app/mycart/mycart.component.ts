import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../product/product.entity';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {

  cartItems: Product[];
  totalAmt = 0;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.cartItems = this.dataService.getCartItems()
    this.totalPrice();
  }

  clearCart() {
    // clear all items when this button clicked
    for (var i = 0; i < this.cartItems.length; i++) {
      this.cartItems[i].itemQuantity = 0
    }
    this.totalPrice();
  }

  totalPrice() {
    for (var i = 0; i < this.cartItems.length; i++) {
      this.totalAmt += (this.cartItems[i].itemPrice * this.cartItems[i].itemQuantity);
    }
  }

}
