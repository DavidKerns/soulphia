import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit, OnDestroy {

  users;
  data: any;
 usersData: any;
 destroyed$ = new Subject<void>();
  constructor( private userService: UserService, private router: Router) { }

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
      this.usersData = user;
    }
  )}

  editUser(id) {
   this.router.navigate(['user/', id,'edit']);
 }
}
