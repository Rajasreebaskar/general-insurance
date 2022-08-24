import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TravelPremiumService {
  readonly baseURL = 'https://localhost:44347/api/TravelModels/CalculatePremium';
  constructor(private http:HttpClient) { }
  getPremium(travelType:string, policyType:string, days:number, age:number):Observable<any>{
    return this.http.get<any>(this.baseURL+"/"+travelType+"/"+policyType+"/"+days+"/"+age);
  }
}
