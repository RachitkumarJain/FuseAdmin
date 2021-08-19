import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  page = 1;
  @Input() lastPage: number;
  @Output() pageChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  previous() {
    if(this.page === 1) {
      return;
    }
    this.page--;
    this.pageChange.emit(this.page);
  }

  next() {
    if(this.page === this.lastPage) {
      return;
    }
    this.page++;
    this.pageChange.emit(this.page);
  }
}
