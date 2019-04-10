import { Component, OnInit } from '@angular/core';
import { Product } from './product.entity';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  items: Product[];
  cartItems: Product[];
  totalAmt = 0;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.items = this.dataService.getItems()
    this.cartItems = this.dataService.getCartItems()
    this.totalPrice();
  }

  onAdd(tempQty) {
    tempQty.itemQuantity++
  }

  onDeduct(tempQty) {
    if (tempQty.itemQuantity === 0) {
      return alert("cannot be negative value")
    } else {
      tempQty.itemQuantity--
    }
  }

  addCart() {
    // Thing to do when item select and this button clicked
    for (var i = 0; i < this.items.length; i++) {
      this.cartItems[i].itemQuantity = this.items[i].itemQuantity
    }
    this.totalPrice();
  }

  clearCart() {
    // clear all items when this button clicked
    for (var i = 0; i < this.cartItems.length; i++) {
      this.cartItems[i].itemQuantity = 0
    }
    this.totalAmt = 0
  }

  totalPrice() {
    for (var i = 0; i < this.cartItems.length; i++) {
      this.totalAmt += (this.cartItems[i].itemPrice * this.cartItems[i].itemQuantity);
    }
  }
}