import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private routerThang: Router, private authThang: AuthService) { }

  ngOnInit() {
  }
  logMeOutPls() {
  this.authThang.logout()
    .then(() => {
        this.routerThang.navigate(['/']);
    })
    .catch((err) =>{
      console.log("BIG ERROR", err)
    })

  // close logMeOutPls()s
  }
}
