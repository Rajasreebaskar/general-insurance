import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentModel } from 'src/app/models/customer-model copy';

@Injectable({
  providedIn: 'root'
})
export class TravelpaymentService {
  url="https://localhost:44347/api/Payments";
  constructor(private http:HttpClient) { }

  createPayment(payment:PaymentModel): Observable<PaymentModel> {  
    return this.http.post<PaymentModel>(this.url,payment,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
  });
}
newurl="https://localhost:44347/api/Payments/getbyInsuranceid";
  GetPayment(insuranceId:number):Observable<PaymentModel>
  {
    return this.http.get<PaymentModel>(this.newurl+'/'+insuranceId);
  }

  
    
    
  }

  

