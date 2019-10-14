import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  getAllAuthors() {
    return this._http.get('/api/authors');
  }

  createAuthor(newAuthor: any) {
    return this._http.post('/api/authors', newAuthor);
  }

  getAuthor(id: any) {
    return this._http.get(`/api/authors/${id}`);
  }
}
