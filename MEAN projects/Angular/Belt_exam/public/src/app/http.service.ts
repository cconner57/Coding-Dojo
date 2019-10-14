import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  getAllPets() {
    return this._http.get('/api/pets');
  }

  createPet(newPet: any) {
    return this._http.post('/api/pets/new', newPet);
  }

  getPet(id: any) {
    return this._http.get(`/api/pets/${id}`);
  }

  editPet(id: any, editPet: any) {
    return this._http.put(`/api/pets/${id}/edit`, editPet);
  }

  deletePet(id: any) {
    return this._http.delete(`/api/pets/${id}`);
  }
}
