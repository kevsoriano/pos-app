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
  attributesArray: Array<{attributeType: string, attributeValues: Array<string>}> = [];

  form = new FormGroup({
    name: new FormControl(''),
    productVariants: new FormArray([])
  });

  constructor(private productService: ProductService, private router: Router) {}

  get productVariants() {
    return (this.form.get('productVariants') as FormArray).controls;
  }

  onSubmit() {
    throw new Error('Method not implemented.');
  }

  onCancel() {
    this.router.navigateByUrl('/users')
  }

  addProductAttributes() {
    // const attribute = new FormGroup({
    //   attributeType: new FormControl(''),
    //   attributeValue: new FormControl('')
    // });
    // this.productVariants.push(productVariant);
    const attribute = {
      attributeType: "",
      attributeValues: [""]
    };
    this.attributesArray.push(attribute);
    console.log(this.attributesArray);
  }
}
