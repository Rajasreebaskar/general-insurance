import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerModel } from 'src/app/models/customer-model';
import { CustomerService } from 'src/app/services/CustomerService/customer.service';
import { ErrorHandlerService } from 'src/app/services/ErrorHandlerService/error-handler.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  errorMessage:string="";

  constructor(private router:Router,public service:CustomerService, public errorHandler: ErrorHandlerService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.insertRecord(form);
    
  }

  insertRecord(form: NgForm) {
    this.service.postCustomer().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.router.navigate(['/home/login'])
        //this.router.navigate([`login`])
      },
      (error)=> {
        this.errorHandler.handleError(error);
        console.log(this.errorMessage=this.errorHandler.errorMessage);
        alert("User already Registered");
      }
      //err => { console.log(err); }
    )
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new CustomerModel();
  }

}
