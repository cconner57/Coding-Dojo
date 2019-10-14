import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  author: any;
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.getAuthor(params['id']);
    });
  }

  getAuthor(id) {
    let obs = this._httpService.getAuthor(id);
    obs.subscribe(data => {
      console.log(data);
      this.author = data;
    })
  }
}
