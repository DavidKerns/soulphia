import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';

@Injectable()
export class UserService {
  userUrl: string = 'http://localhost:3000/user'

  constructor(
    private httpThang: Http
  ) { }


  newUser(componentInfo) {
      return this.httpThang
        .post(
          `${environment.apiBase}/api/user`,

          // Form body information to send to the back end (req.body)
          componentInfo,

          // Send the cookies across domains
          { withCredentials: true }
        )

        // Parse the JSON
        .map(res => res.json());
  } // close newUser()



  allUser(): Observable<any>{
    return this.httpThang.get('http://localhost:3000/user/show',
                      { withCredentials: true }
                    )
        .map((response: Response) => {
          return response.json();
        })
  }

  editUser(id): Observable<any>{
      return this.httpThang.get(`http://localhost:3000/user/${id}`,
                        { withCredentials: true }
                      )
          .map((response: Response) => {
            return response.json();
          })

}

saveUpdatedUser(updates){

  return this.httpThang.post(`${this.userUrl}/${updates.id}`,
                          updates,{ withCredentials: true }
                  ).map((res) =>{ return res.json() });
}

remove(id) {
  return this.httpThang.delete(`${this.userUrl}/${id}/delete`,
                                      { withCredentials: true }
    ).map((res) => res.json());
}

saveUpdatedProfile(updates){

  return this.httpThang.post(`${this.userUrl}/${updates.id}`,
                          updates,{ withCredentials: true }
                  ).map((res) =>{ return res.json() });
}
}
