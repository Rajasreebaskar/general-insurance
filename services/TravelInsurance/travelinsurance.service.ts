import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsuranceModel } from 'src/app/models/Insurance-model';

@Injectable({
  providedIn: 'root'
})
export class TravelinsuranceService {
  url="https://localhost:44347/api/InsurancePolicies";
  constructor(private http:HttpClient) { }
  GetInsurancebyId(insuranceid:number):Observable<InsuranceModel[]>
  {
    return this.http.get<InsuranceModel[]>(this.url+'/'+insuranceid);
  }

  CreateInsurance(insurance:InsuranceModel):Observable<InsuranceModel>
  {
    return this.http.post<InsuranceModel>(this.url,insurance);
    
  }
  newurl="https://localhost:44347/api/InsurancePolicies/GetInsuranceidByContact"

  getinsuranceid(contact:string):Observable<any>
  {
    return this.http.get<any>(this.newurl+'/'+contact);
  }
 
}
