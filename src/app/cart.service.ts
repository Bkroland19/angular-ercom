import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];
 private cartItemsCountSubject = new BehaviorSubject<number>(0);

  getCartItemsCount$ = this.cartItemsCountSubject.asObservable();

  getCartItemsCount(): number {
    return this.cartItemsCountSubject.value;
  }
  getCartItems(): any[] {
    return this.cartItems;
  }
 

  addToCart(product: any) {
    const existingItem = this.cartItems.find(
      (item) => item.product.id === product.id
    );
    

    if (existingItem) {
      // If the product is already in the cart, increment the quantity
      existingItem.quantity += 1;
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      this.cartItems.push({ product, quantity: 1 });
    }

    // Increment the cartItemsCount
     this.cartItemsCountSubject.next(this.cartItemsCountSubject.value + 1);
  }

  removeFromCart(index: number) {
    // Implement your logic to remove from cart
  }

  constructor() {}
}
