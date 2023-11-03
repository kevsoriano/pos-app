import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { AccordionComponent } from './components/accordion/accordion.component';



@NgModule({
  declarations: [
    PaginationComponent,
    ModalComponent,
    AccordionComponent
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
  ]
})
export class SharedModule { }
