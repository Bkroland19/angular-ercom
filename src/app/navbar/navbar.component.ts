import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  cartItemsCount: number = 0;

  isDarkMode = true; // Set this based on your logic

  constructor(private _cartService: CartService) {}

  ngOnInit(): void {
    this._cartService.getCartItemsCount$.subscribe((count) => {
      this.cartItemsCount = count;
    });
  }
}
