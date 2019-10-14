import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  allProducts: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
  let obs = this._httpService.getAllProducts();
  obs.subscribe(data => {
    console.log(data);
    this.allProducts = data;
  });
  }

}
