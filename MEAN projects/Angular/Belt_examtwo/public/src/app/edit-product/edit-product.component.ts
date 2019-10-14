import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: any;
  errorsObject: any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.getProduct(params['id']);
    });
  }

  getProduct(id) {
    let obs = this._httpService.getProduct(id);
    obs.subscribe(data => {
      this.product = data;
    });
  }

  editProduct() {
    let obs = this._httpService.editProduct(this.product._id, this.product);
    obs.subscribe((data: any) => {
      if (data.errors) {
        this.errorsObject = data.errors;
        console.log(this.errorsObject);
      } else {
        this._router.navigate([`/products`]);
      }
    });
  }
  
  reset() {
    window.location.reload()
  }
}
