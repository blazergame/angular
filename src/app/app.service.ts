import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
@Injectable()
export class SocialService {
  host:string = 'http://localhost:8080';
  userId:string = "";

  constructor(private http: Http) { }

  setUserid(uId:string) {
    this.userId = uId;
  }

  validateLUsernameInfo(username:string) {
    return this.http.get( this.host + '/api/user/username/' + username)
    .map(response => response.json());
  }

  getAllPosts() {
    return this.http.get( this.host + '/api/userPost/')
    .map(response => response.json());
  }

  getCommentsForPost(pId: string) {
    return this.http.get( this.host + '/api/comment/post/' + pId)
    .map(response => response.json());
  }
}


*/

@Injectable()
export class AppService {
  host:string = 'http://localhost:8080';
  userId:string = "";

  constructor() { }

}
