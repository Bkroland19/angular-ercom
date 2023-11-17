import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService
  ) {}

  ngOnInit(): void {
    const productId = this._route.snapshot.params['id'];

    this._productService.getProductById(productId).subscribe((data) => {
      this.product = data;
    });
  }

  addToCart(product: any) {
    // Implement your logic to add to cart
  }
}
