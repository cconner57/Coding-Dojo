import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from './../http.service';
import { getInjectorDef } from '@angular/core/src/di/defs';

@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.css']
})
export class RideComponent implements OnInit {
  ride: any;
  newRider: any;
  constructor(private _http: HttpService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(data => {
      this.getRide(data['id']);
      })
    this.newRider = {name: ""}
  }

  getRide(r_id){
    this._http.singleRide(r_id).subscribe(single => {
      this.ride = single;
    })
  }

  addRider(){
    this._http.addRider(this.newRider, this.ride['_id']).subscribe(data => {
      this.getRide(this.ride['_id']);
    })
    this.newRider = {name: ""}
  }

  deleteRider(rider: any){
    console.log(rider);
    this._http.eject(rider, this.ride._id).subscribe(data => {
      console.log(data);
      this.getRide(this.ride['_id'])
    })
  }
}
