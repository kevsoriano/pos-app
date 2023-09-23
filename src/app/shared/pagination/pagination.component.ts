import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  currentPage: number = 1;
  currentPageSize: number = 10;
  @Input() totalPages: number;
  @Output() pageChanged = new EventEmitter<{page: number, limit: number}>;
  @Output() pageSizeChanged = new EventEmitter<{page: number, limit: number}>;

  pageSizes = [10,25,100]

  constructor() {}

  ngOnInit(): void {}

  onChangePage(page: number): void {
    // console.log(`Page changed to ${+event.target.textContent - 1}`);
    this.currentPage = page - 1;
    this.pageChanged.emit({
      page: this.currentPage,
      limit: this.currentPageSize
    });
  }

  onPrevPage(): void {
    // console.log(`Page changed to ${+event.target.textContent - 1}`);
    if(this.currentPage>0) {
      this.currentPage = this.currentPage - 1;
    }
    this.pageChanged.emit({
      page: this.currentPage,
      limit: this.currentPageSize
    });
  }

  onNextPage(): void {
    // console.log(`Page changed to ${+event.target.textContent - 1}`);
    if(this.currentPage<this.totalPages) {
      this.currentPage = this.currentPage + 1;
    }
    this.pageChanged.emit({
      page: this.currentPage,
      limit: this.currentPageSize
    });
  }

  onChangePageSize() {
    // console.log(`Page changed to ${+event.target.textContent}`);
    this.pageSizeChanged.emit({
      page: this.currentPage,
      limit: this.currentPageSize
    })
  }
}
