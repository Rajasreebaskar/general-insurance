import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {
baseURL:string="https://localhost:44347/api/Admins"
  constructor(private http:HttpClient) { }
  VerifyAdmin(Email:string,password:string)
  {
    return this.http.get(this.baseURL+'/'+encodeURIComponent(Email)+','+password);
  }

}
