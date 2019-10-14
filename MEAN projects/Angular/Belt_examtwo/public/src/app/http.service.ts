import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  getAllProducts() {
    return this._http.get('/api/products');
  }

  createProduct(newProduct: any) {
    return this._http.post('/api/products/new', newProduct);
  }

  getProduct(id: any) {
    return this._http.get(`/api/products/${id}`);
  }

  editProduct(id: any, editProduct: any) {
    return this._http.put(`/api/products/${id}/edit`, editProduct);
  }

  deleteProduct(id: any) {
    return this._http.delete(`/api/products/${id}`);
  }
}
