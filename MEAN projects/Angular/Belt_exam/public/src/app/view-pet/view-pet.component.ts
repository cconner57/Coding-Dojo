import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-pet',
  templateUrl: './view-pet.component.html',
  styleUrls: ['./view-pet.component.css']
})
export class ViewPetComponent implements OnInit {
  pet: any;
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.getPet(params['id']);
    });
  }

  getPet(id) {
    let obs = this._httpService.getPet(id);
    obs.subscribe(data => {
      console.log(data);
      this.pet = data;
    });
  }

  deletePet(id) {
    let obs = this._httpService.deletePet(id);
    obs.subscribe( (data) => {
      console.log( data );
      this._router.navigate(['/pets']);
    });
  }
  
}
