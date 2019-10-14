import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.css']
})
export class AllAuthorsComponent implements OnInit {
  allAuthors: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAllAuthors();
  }

  getAllAuthors() {
  let obs = this._httpService.getAllAuthors();
  obs.subscribe(data => {
    console.log(data);
    this.allAuthors = data;
  });
  }

}
