import { Injectable } from '@angular/core';
import { Product } from '../shared/models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsEndpoint = 'http://localhost:8082/products';

  constructor(private http: HttpClient) { }

  createProduct(productDetails: Product) {
    return this.http.post(this.productsEndpoint, productDetails);
  }
}
