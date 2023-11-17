import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  cartItems: any[] = [];
  constructor(
    private _productService: ProductService,
    private _cart: CartService
  ) {}

  ngOnInit(): void {
    this._productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addToCart(product: Product) {
    this._cart.addToCart(product);
  }
}
