import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private activatedRouter: ActivatedRoute) { }
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
    role: updateUser.value.role,
    language: updateUser.value.language,
    bigThing: updateUser.value.bigThing
 }

 this.userService.saveUpdatedUser(updates)
 .subscribe((result) =>  {
   this.userData = result;
 }
)}

// getUsers () {
//   this.userService.allUser()
//   .takeUntil(this.destroyed$)
//   .subscribe((user) => {
//     console.log(user);
//     this.usersData = user;
//   }
// )}

  editUser(){
    this.userService.editUser(this.userId)
    .subscribe((user) => {
      console.log(user);
      this.userData = user;
    }
  )}



  remove(id){
       if(window.confirm('Are you sure?')) {
         this.userService.remove(this.userId)
         .subscribe(() => {
           this.router.navigate(['/userrole']);
         });
     }
   }

}
