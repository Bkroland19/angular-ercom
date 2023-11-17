import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems = this._cartService.getCartItems();
  cartItemCount = this._cartService.getCartItemsCount();

  constructor(private _cartService: CartService) {}

  


  ngOnInit(): void {
    
  }
}
