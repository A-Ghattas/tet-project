import { Component, OnInit } from '@angular/core';
import {faBars, faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  faBars = faBars;
  faSearch = faSearch;

  constructor() { }

  ngOnInit() {
  }

}
