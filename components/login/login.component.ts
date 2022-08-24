import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ErrorHandlerService } from 'src/app/services/ErrorHandlerService/error-handler.service';
import { CustomerService } from 'src/app/services/CustomerService/customer.service';
import { CustomerModel } from 'src/app/models/customer-model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
//import { verify } from 'crypto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
errormsg:string="";
  constructor(private router:Router,private customer:CustomerService,private customermodel:CustomerModel,private errorhandler:ErrorHandlerService,private http:HttpClient,private formbuild:FormBuilder) { }

  ngOnInit(): void {
    
  }

  LoginForm=new FormGroup(
    {
      Email:new FormControl("",[Validators.required,Validators.email]),
      Password:new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(12)])
    }

  )

  Submit()
  {
    
    this.verify();
    
  }
  verify()
  {
    this.customer.VerifyCustomer(this.LoginForm.value.Email,this.LoginForm.value.Password).subscribe(
      (res):any=>
      {
        let contact=res;
        let stringcontact=contact.toString();
        localStorage.setItem('contact',stringcontact);
        let email = this.LoginForm.value.Email;
        this.LoginForm.reset();
        localStorage.setItem('emailId',email)
        this.router.navigate(['/user/homepage'])
      }
      ,
      (error)=>
      {
        // this.errorhandler.handleError(error);
        // this.errormsg = this.errorhandler.errorMessage;
        alert("User doesn't exists");
        return EMPTY;
      }
    );
  }
}
