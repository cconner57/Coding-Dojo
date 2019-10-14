import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  product: any;
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.getProduct(params['id']);
    });
  }

  getProduct(id) {
    let obs = this._httpService.getProduct(id);
    obs.subscribe(data => {
      console.log(data);
      this.product = data;
    });
  }

  deleteProduct(id) {
    let obs = this._httpService.deleteProduct(id);
    obs.subscribe( (data) => {
      console.log( data );
      this._router.navigate(['/products']);
    });
  }
}
