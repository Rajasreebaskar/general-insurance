import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TravelDetailsModel } from 'src/app/models/traveldetails-model';

@Injectable({
  providedIn: 'root'
})
export class TraveldetailsService {
  url="https://localhost:44347/api/TravelInsurances";
  constructor(private http:HttpClient) { }

  GetTraveldet():Observable<TravelDetailsModel[]>
  {
    return this.http.get<TravelDetailsModel[]>(this.url);
  }
  
  CreateTravelDetails(traveldet:TravelDetailsModel)
  {return this.http.post(this.url,traveldet,{
    headers:new HttpHeaders({
      'Content-Type':'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Method':'*'
      
    })
  }); }
  newurl="https://localhost:44347/api/TravelInsurances/getTI";
  getbyInsuranceid(insuranceid:number)
  {
    return this.http.get(this.newurl+'/'+insuranceid);
  }
  
}

  
