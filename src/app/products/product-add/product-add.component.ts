import { Component, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  attributesArray: Array<{attributeType: string, attributeValues: Array<string>}> = [];
  placeholder: string = 'Enter an attribute value';
  removable = true;
  form = new FormGroup({
    name: new FormControl(''),
    productVariants: new FormArray([])
  });
  @ViewChild('attributeValueField') attributeValueField: any;

  constructor(private productService: ProductService, private router: Router) {}

  get productVariants() {
    return (this.form.get('productVariants') as FormArray).controls;
  }

  getAttributeValues(index: number) {
    return this.attributesArray[index].attributeValues;
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
      attributeValues: []
    };
    this.attributesArray.push(attribute);
  }

  onAttributeTypeKeyDown($event: KeyboardEvent, index: number, attributeType: string) {
    switch($event.keyCode) {
      case 13:
        if(attributeType && attributeType.trim() !== '') {
          this.attributesArray[index].attributeType = attributeType;
          console.log(this.attributesArray)
          $event.preventDefault();
        }
        break;
      default:
        break;
    }
  }

  onAttributeValueKeyDown($event: KeyboardEvent, index: number, attributeValue: string) {
    switch($event.keyCode) {
      case 13:
        if(attributeValue && attributeValue.trim() !== '') {
          if(!this.attributesArray[index].attributeValues.includes(attributeValue)) {
            this.attributesArray[index].attributeValues.push(attributeValue);
            this.createProductVariants();
          }
          this.attributeValueField.nativeElement.value = '';
          $event.preventDefault();
        }
        break;
      case 8: {
        if(!attributeValue && this.attributesArray[index].attributeValues.length > 0) {
          this.attributesArray[index].attributeValues.pop();
        }
        break;
      }
      default:
        break;
    }
  }

  createProductVariants() {
    this.attributesArray.forEach((attribute)=> {
      console.log(attribute.attributeType);
    });
  }

  removeItem(index: number, position: number) {
    this.attributesArray[index].attributeValues.splice(position, 1);
  }
}
