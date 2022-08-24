import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})

export class InsuranceModel
{
InsuranceId:number=0;
Contact:string="";
IssueDate:Date=new Date();
PolicyType:string="Travel";
IsActive:string="Active";

}