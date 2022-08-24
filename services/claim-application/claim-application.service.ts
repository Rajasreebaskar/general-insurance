import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClaimFormData } from 'src/app/models/claim-application.models';

@Injectable({
  providedIn: 'root'
})
export class ClaimApplicationService {

  baseUrl="https://localhost:44347/api/Claims";
  
  constructor(private http:HttpClient) { }

  addClaim(claimData:ClaimFormData):Observable<any>{
   return this.http.post(this.baseUrl,claimData);
  }

  getClaimHistory():Observable<any>{
    let contact = localStorage.getItem('contact');
    return this.http.get(this.baseUrl+"/ClaimHistory/"+contact);
  }

  Url="https://localhost:44347/api/Claims/NotApproved";
getallclaim():Observable<any>
{
  return this.http.get(this.Url)
}

ChangeStatus(claimid:number,amount:number):Observable<any>
{
  return this.http.put(`${this.baseUrl}/${claimid},${amount}`,{claimid,amount});
}

}
