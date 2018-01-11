import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']

})


export class HomepageComponent implements OnInit {
  isLoggedOut: boolean = false;

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



  errorMessage: string;

  loginInfo = {
    email: '',
    password: ''
  };

  loginErrorMessage: string;



  constructor(
    private authThang: AuthService,
    private routerThang: Router,
  ) { }

  ngOnInit() {
    this.authThang.checklogin()
      // If success, we are logged in.
      .then((resultFromApi) => {
          this.routerThang.navigate(['/profile']);
      })

      // Even if you don't do anything on error, catch to avoid a console error.
      .catch((err) => {
          this.isLoggedOut = true;
      });
  }

  doSignUp() {
    this.authThang.signup(this.signUpInfo)
      .then((resultFromApi) => {
          // clear form
          this.signUpInfo = {
            fullName: '',
            email: '',
            password: '',
            language: ''

          };


          // clear error message
          this.errorMessage = "";

          // redirect to /profile
          this.routerThang.navigate(['/profile']);
      })
      .catch((err) => {
          const parsedError = err.json();
          this.errorMessage = parsedError.message + ' 😤';
      });
  } // close doSignUp()
  doLogin() {
    this.authThang.login(this.loginInfo)
      .then((resultFromApi) => {
          // clear the form
          this.loginInfo = {
            email: '',
            password: ''
          };

          // clear the error message
          this.loginErrorMessage = "";

          // redirect to /profile
          this.routerThang.navigate(['/chat'], { fragment: 'init ' });
      })
      .catch((err) => {
          const parsedError = err.json();
          this.loginErrorMessage = parsedError.message + ' 😤';
      });
  } // close doLogin()
}
