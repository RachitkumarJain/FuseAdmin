import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  lastPage: number;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.load();
  }

  delete(id: number) {
    if(confirm('Are you sure you want to delete this user?')) {
      this.productsService.delete(id)
        .subscribe(res => {
          this.products = this.products.filter(user => user.id !== id);
        });
    }
  }

  load(page = 1){
    this.productsService.all(page)
    .subscribe((res : {data: Product[], meta: {page: number, last_page: number, total: number}}) => {
      this.products = res.data;
      this.lastPage = res.meta.last_page;
    });
  }
}
