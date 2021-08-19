import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      description: '',
      image: '',
      price: ''
    });

    this.id = this.route.snapshot.params.id;

    this.productService.getSingle(this.id)
      .subscribe(product => {
        this.form.patchValue(product);
      });
  }

  submit() {
    this.productService.update(this.id ,this.form.getRawValue())
      .subscribe(res => {
        this.router.navigate(['/products']);
      })
  }
}
