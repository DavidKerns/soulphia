import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  userId: number;
  userData: any;
  user;

  constructor(private userService: UserService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRouter.params
    .subscribe((params) => {
      this.userId = (params['id']);
      console.log(this.userId);
    });

  this.editUser()
  }

  saveUpdatedProfile(updateProfile){

    const updates = {
      id: this.userId,
      username: updateProfile.value.username,
      email: updateProfile.value.email,
      language: updateProfile.value.language,
      personal: updateProfile.value.personal

   }
   this.userService.saveUpdatedProfile(updates)
   .subscribe((result) => {
   });
  }

    editUser(){
      this.userService.editUser(this.userId)
      .subscribe((user) => {
        console.log(user);
        this.userData = user;
      }
    )}

  }
