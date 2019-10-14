import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newRide: any;
  errors = [];
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.newRide = {driver: "", destination: "", capacity: ""}
    // this._httpService.allRides().subscribe(data => console.log(data));
  }

  addRide() {
    this._httpService.createRide(this.newRide).subscribe(data => {
      if(data['errors']){
        for(var key in data['errors']){
          this.errors.push(data['errors'][key]['message'])
        }
      }else{
        this.newRide = {driver: "", destination: "", capacity: ""}
        this._router.navigate(['/rides'])
      }
    });
  }

}
