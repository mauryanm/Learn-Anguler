import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }
  userReagistration(data:any){
    return this.http.post('http://localhost:3000/users', data)
  }
}
