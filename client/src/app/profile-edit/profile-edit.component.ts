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
  signUpInfo = {
    fullName: '',
    email: '',
    password: '',
    language: ''
  }; 
  languageArray: any[]= [
  'ENGLISH',
  'SPANISH',
  'PORTUGESE',
  'MANDARIN',
  'JAPANESE',
  'FRENCH',
  'GERMAN',
  'RUSSIAN',
  'ARABIC',
  'HINDI'
  ];

  constructor(private userService: UserService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRouter.params
    .subscribe((params) => {
      this.userId = (params['id']);
      console.log(this.userId);
    });

  this.editUser()


  }

  saveUpdatedUser(updateUser){

    const updates = {
      id: this.userId,
      username: updateUser.value.username,
      email: updateUser.value.email,
      language: updateUser.value.language,

   }
   this.userService.saveUpdatedUser(updates)
   .subscribe((result) => {
     this.userData = result;
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
