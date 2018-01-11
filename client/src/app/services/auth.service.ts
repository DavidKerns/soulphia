import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  constructor(
    private httpThang: Http
  ) { }



  signup(componentInfo) {
      return this.httpThang
        .post(
          `${environment.apiBase}/api/signup`,

          {
            username: componentInfo.username,
            email: componentInfo.email,
            password: componentInfo.password,
            language: componentInfo.language,

          },


          { withCredentials: true }
        )


        .toPromise()


        .then(res => res.json());
  }

  login(componentInfo) {
      return this.httpThang
        .post(
          `${environment.apiBase}/api/login`,


          {
            email: componentInfo.email,
            password: componentInfo.password
          },


          { withCredentials: true }
        )


        .toPromise()


        .then(res => res.json());
  }

  logout() {
      return this.httpThang
        .post(
          `${environment.apiBase}/api/logout`,


          {},


          { withCredentials: true }
        )


        .toPromise()

        // Parse the JSON
        .then(res => res.json());
  } // close logout()

  checklogin() {
      return this.httpThang
        .get(
          `${environment.apiBase}/api/checklogin`,

          // Send the cookies across domains
          { withCredentials: true }
        )

        // Convert from observable to promise
        .toPromise()

        // Parse the JSON
        .then(res => res.json());
  } // close checklogin()
}
