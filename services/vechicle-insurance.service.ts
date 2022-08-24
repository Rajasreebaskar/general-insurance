import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VechicleInsurance } from '../models/VechicleInsurance';

@Injectable({
  providedIn: 'root'
})
export class VechicleInsuranceService {
  readonly baseURL = 'https://localhost:44347/api/VehicleInsurances/GetInsuranceDetails';
  constructor(private httpClient:HttpClient) { }
  
  VechicleInsurance(formData:VechicleInsurance):Observable<any>
  {
    console.log(formData);
    return this.httpClient.post<any>("https://localhost:44347/api/VehicleInsurances",formData)
  
  }

  RenewDetails(email:string)
  {
    return this.httpClient.get(`${this.baseURL}/${email}`)
  }
  GetVehicleplanbyid(insuranceid:number):Observable<VechicleInsurance>
  {
    return this.httpClient.get<VechicleInsurance>("https://localhost:44347/api/VehicleInsurances/getbyIid/"+insuranceid);
  }
}
