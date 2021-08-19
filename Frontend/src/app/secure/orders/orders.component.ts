import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  animations: [
    trigger('tableState', [
      state('show', style({
        maxHeight: '150px'
      })),
      state('hide', style({
        maxHeight: 0
      })),
      transition('show => hide', animate('1000ms ease-in')),
      transition('hide => show', animate('1000ms ease-out'))
    ])
  ]
})
export class OrdersComponent implements OnInit {
  lastPage: number;
  orders: Order[] = [];
  selected: number;

  constructor(
    private ordersService: OrderService
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load(page = 1) {
    this.ordersService.all(page)
      .subscribe((res: {data: Order[], meta: {page: number, last_page: number, total: number}}) => {
        this.orders = res.data;
        this.lastPage = res.meta.last_page;
        console.log(this.orders);
      });
  }

  select(id: number) {
    this.selected = this.selected === id ? 0 : id;
  }

  itemState(id: number) {
    return this.selected === id ? 'show' : 'hide';
  }

  export() {
    this.ordersService.export()
      .subscribe(res => {
        const blob = new Blob([res], {type: 'text/csv'});
        const downloadUrl = window.URL.createObjectURL(res);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'orders.csv';
        link.click();
      });
  }
}
