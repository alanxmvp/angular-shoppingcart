import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addCart() {
    // Thing to do when item select and this button clicked
  }

  clearCart() {
    // clear all items when this button clicked
  }

}
