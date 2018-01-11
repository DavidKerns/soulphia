import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  isLoggedOut: boolean = false;

  constructor(
      private routerThang: Router
  )
   { }

  ngOnInit() {
  }
    createClass(){

    }


}
