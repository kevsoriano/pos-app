import { Component } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  isModalOpen = false;
  items: {title: string, content: string}[] = [
    {title: "Why is the sky blue?", content: "The sky is blue because it is."},
    {title: "Why does an orange taste like?", content: "An orange tastes like an orange."},
    {title: "Why color is the cat?", content: "The cat is an orange color."}
  ];

  ToggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }
}
