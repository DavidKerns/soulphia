import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import { UserService } from '../services/user.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile;
  data: any;
  constructor(private userService: UserService, private router: Router, private activatedRouter: ActivatedRoute, private authThang: AuthService,
  private routerThang: Router) { }

  ngOnInit() {
    this.profile.getProfile()
        .subscribe((profile) => {
          this.data = profile;
        });
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
