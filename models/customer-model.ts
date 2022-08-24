import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CustomerModel {
  firstName:string="";
  lastName:string="";
  email:string="";
  dob:Date=new Date();
  contact:number=0;
  address:string="";
  password:string="";

}
