import { Component, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: AddressFormComponent
    }
  ]
})
export class AddressFormComponent implements OnInit, ControlValueAccessor, OnDestroy {

  form: FormGroup;
  onTouched = () => {};
  onChangeSub: Subscription;

  ngOnInit(): void {
    this.form =  new FormGroup({
      city: new FormControl(''),
      country: new FormControl(''),
      streetName: new FormControl(''),
      postalCode: new FormControl(''),
      type: new FormControl('')
    })
  }

  ngOnDestroy(): void {
    this.onChangeSub.unsubscribe();
  }

  get addresses() {
    return this.form.controls;
  }

  writeValue(value: any): void {
    if(value) {
      this.form.setValue(value);
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeSub = this.form.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if(isDisabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }
}
