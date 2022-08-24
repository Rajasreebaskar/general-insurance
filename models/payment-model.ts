import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class PaymentModel
{
    PaymentId:number=0;
    InsuranceId:number=0;;
    Contact:string="";
    PremiumAmount:number=0;

}