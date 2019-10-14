import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-pets',
  templateUrl: './all-pets.component.html',
  styleUrls: ['./all-pets.component.css']
})
export class AllPetsComponent implements OnInit {
  allPets: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAllPets();
  }

  getAllPets() {
  let obs = this._httpService.getAllPets();
  obs.subscribe(data => {
    console.log(data);
    this.allPets = data;
  });
  }

}
