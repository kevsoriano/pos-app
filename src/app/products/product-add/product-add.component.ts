import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  items = ['angular', 'chip', 'tutorial'];
  form = new FormGroup({
    name: new FormControl(''),
    productVariants: new FormArray([])
  });

  constructor(private productService: ProductService, private router: Router) {}

  onSubmit() {
    throw new Error('Method not implemented.');
  }

  onCancel() {
    this.router.navigateByUrl('/users')
  }
}
