import { Injectable } from '@angular/core';
import { CustomerModel } from 'src/app/models/customer-model';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  formData: CustomerModel= new CustomerModel();
  readonly baseURL = 'https://localhost:44347/api/Customers';
  list: CustomerModel[] = [];

  constructor(private http:HttpClient) { }

  postCustomer() {
    return this.http.post(this.baseURL, this.formData);
  }
  getCustomrById(contact: string){
    return this.http.get(`${this.baseURL}/${contact}`);
  }
  getcusbycontact(contact:string)
  {
    return this.http.get(this.baseURL+'/'+contact);
  }
  getCustomrByEmail(email: string){
    return this.http.get(`${this.baseURL}/GetByEmail/${email}`);
  }
  refreshList() {
      
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as CustomerModel[]);
    
  }
  VerifyCustomer(Email:string,password:string)
  {
    return this.http.get(this.baseURL+'/'+encodeURIComponent(Email)+','+password);
  }
  ChangePassword(Email:string,password:string)
  {
    return this.http.put(`${this.baseURL}/${encodeURIComponent(Email)},${password}`,{Email,password});
  }
}
