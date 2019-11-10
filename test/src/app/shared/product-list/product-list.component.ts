import {Component, OnInit} from '@angular/core';
import {ProductListService} from '../product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  searchString = '';
  products = [];

  constructor(private productListService: ProductListService) {
  }

  ngOnInit() {
    this.productListService.getProducts(this.searchString)
      .subscribe((data) => {
        this.products = data['products'];
      });
  }

  updateProducts(event) {
    this.productListService.getProducts(event.target.value)
      .subscribe((data) => {
        this.products = data['products'];
      });
  }

}
