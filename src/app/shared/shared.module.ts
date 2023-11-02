import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AddressFormComponent } from './components/address-form/address-form.component';



@NgModule({
  declarations: [
    PaginationComponent,
    ModalComponent,
    AccordionComponent,
    AddressFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PaginationComponent,
    ModalComponent,
    AccordionComponent,
    ReactiveFormsModule,
    AddressFormComponent
  ]
})
export class SharedModule { }
