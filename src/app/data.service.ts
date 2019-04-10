import { Injectable } from '@angular/core';
import { Product } from './product/product.entity';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private products: Product[];
  private cartProducts: Product[];

  constructor() {
    this.products = [
      { itemId: "1", itemDesc: "Inspiron 15 5584 Laptop", itemPrice: 3099, itemImg: "https://tshop.r10s.com/f2f/3bb/82d5/b0ee/9072/158e/0cde/1100e9a8832c600c429022.jpg?_ex=128x128", itemQuantity: 0 },
      { itemId: "2", itemDesc: "XPS 15 9575", itemPrice: 9289, itemImg: "https://tshop.r10s.com/f2f/3bb/82d5/b0ee/9072/158e/0cde/1100e9a8832c600c429022.jpg?_ex=128x128", itemQuantity: 0 },
      { itemId: "3", itemDesc: "G7 15 Gaming Laptop", itemPrice: 7849, itemImg: "https://tshop.r10s.com/f2f/3bb/82d5/b0ee/9072/158e/0cde/1100e9a8832c600c429022.jpg?_ex=128x128", itemQuantity: 0 }
    ]

    this.cartProducts = [
      { itemId: "1", itemDesc: "Inspiron 15 5584 Laptop", itemPrice: 3099, itemImg: "https://tshop.r10s.com/f2f/3bb/82d5/b0ee/9072/158e/0cde/1100e9a8832c600c429022.jpg?_ex=128x128", itemQuantity: 0 },
      { itemId: "2", itemDesc: "XPS 15 9575", itemPrice: 9289, itemImg: "https://tshop.r10s.com/f2f/3bb/82d5/b0ee/9072/158e/0cde/1100e9a8832c600c429022.jpg?_ex=128x128", itemQuantity: 0 },
      { itemId: "3", itemDesc: "G7 15 Gaming Laptop", itemPrice: 7849, itemImg: "https://tshop.r10s.com/f2f/3bb/82d5/b0ee/9072/158e/0cde/1100e9a8832c600c429022.jpg?_ex=128x128", itemQuantity: 0 }
    ]

  }

  getItems() {
    return this.products;
  }

  getCartItems() {
    return this.cartProducts;
  }
}
