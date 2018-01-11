import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

@Injectable()
export class ClassesService {

  constructor(
    private httpThang: Http
  ) { }


  newClass(componentInfo) {
      return this.httpThang
        .post(
          `${environment.apiBase}/api/classes`,

          // Form body information to send to the back end (req.body)
          componentInfo,

          // Send the cookies across domains
          { withCredentials: true }
        )

        // Parse the JSON
        .map(res => res.json());
  } // close newClass()

  allClasses() {
      return this.httpThang
        .get(
          `${environment.apiBase}/api/classes`,

          // Send the cookies across domains
          { withCredentials: true }
        )

        // Parse the JSON
        .map(res => res.json());
  } // close allClasses()
}
