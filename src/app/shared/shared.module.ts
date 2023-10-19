import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { AccordionComponent } from './accordion/accordion.component';



@NgModule({
  declarations: [
    PaginationComponent,
    ModalComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PaginationComponent,
    ModalComponent,
    AccordionComponent
  ]
})
export class SharedModule { }
