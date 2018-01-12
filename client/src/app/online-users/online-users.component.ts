import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import { UserService } from '../services/user.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';


@Component({
  selector: 'app-online-users',
  templateUrl: './online-users.component.html',
  styleUrls: ['./online-users.component.css']
})
export class OnlineUsersComponent implements OnInit, OnDestroy {
  profile;
  data: any;
  userData: any;
  destroyed$ = new Subject<void>();
  constructor(private userService: UserService, private router: Router, private activatedRouter: ActivatedRoute, private authThang: AuthService,
  private routerThang: Router) { }

  ngOnInit() {
    this.getUsers();
    }
    ngOnDestroy(): void {
      this.destroyed$.next();
      this.destroyed$.complete();

    }
    getUsers () {
      this.userService.allUser()
      .takeUntil(this.destroyed$)
      .subscribe((user) => {
        console.log(user);
        this.userData = user;
      }
    )}
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
