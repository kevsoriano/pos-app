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
    const attribute = {
      attributeType: "",
      attributeValues: [""]
    };
    this.attributesArray.push(attribute);
    console.log(this.attributesArray);
  }

  onKeyDown($event: KeyboardEvent, value: string) {
    console.log(value);
    switch($event.keyCode) {
      case 13:
        if(value && value.trim() !== '') {
          if(!this.attributesArray.['attributeValues'].includes(value)) {
            this.attributesArray.push(value);
            // this.triggerChange();
          }
          this.inputField.nativeElement.value = '';
          $event.preventDefault();
        }
        break;
      case 8: {
        if(!value && this.items.length > 0) {
          this.attributesArray.pop();
        }
        break;
      }
      default:
        break;
    }
  }
}
