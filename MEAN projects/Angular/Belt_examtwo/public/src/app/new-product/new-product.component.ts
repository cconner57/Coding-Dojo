import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  newProduct: any;
  errorsObject: any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.newProduct = { name: '', qty: '', price: ''};
  }

  createNewProduct() {
    let obs = this._httpService.createProduct(this.newProduct);
    obs.subscribe((data: any) => {
      if(data.errors) {
        this.errorsObject = data.errors;
        console.log(this.errorsObject);
      } else {
        this._router.navigate(['/products']);
      }
    });
  }
}
