import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  pet: any;
  errorsObject: any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.getPet(params['id']);
    });
  }

  getPet(id) {
    let obs = this._httpService.getPet(id);
    obs.subscribe(data => {
      this.pet = data;
    });
  }

  editPet() {
    let obs = this._httpService.editPet(this.pet);
    obs.subscribe((data: any) => {
      if(data.errors) {
        this.errorsObject = data.errors;
        console.log(this.errorsObject);
      } else {
        this._router.navigate(['/pets']);
      }
    });
  }
}
