import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { registerUser } from 'src/interface/interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient ) { }

  registerUser(data: registerUser){
    return this.http.post('https://cdn.sivabharathy.in/register',data)
  }

  loginUser(data: registerUser){
    return this.http.post('https://cdn.sivabharathy.in/login',data)
  }

}
