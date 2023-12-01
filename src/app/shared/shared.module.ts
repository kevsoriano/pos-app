import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ChipsComponent } from './components/chips/chips.component';



@NgModule({
  declarations: [
    PaginationComponent,
    ModalComponent,
    AccordionComponent,
    ChipsComponent
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
    ChipsComponent
  ]
})
export class SharedModule { }
