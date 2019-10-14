import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css']
})
export class NewPetComponent implements OnInit {
  newPet: any;
  errorsObject: any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.newPet = { name: '', age: '', description: '', skill1: '', skill2: '', skill3: ''};
  }

  createNewPet() {
    let obs = this._httpService.createPet(this.newPet);
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
