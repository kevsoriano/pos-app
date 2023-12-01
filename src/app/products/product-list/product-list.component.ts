import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  productList: Product[];

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
    
  }

  addProduct() {
    this.router.navigate(['/products/add']);
  }
  onDelete(arg0: any) {
    throw new Error('Method not implemented.');
  }

}
