import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserservService {

  constructor(private http: HttpClient) {}

  getUser(id:number){
    console.log(this.http.get(`api/getUser/${id}`));
  }
}
