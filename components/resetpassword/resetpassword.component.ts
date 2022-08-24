import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/CustomerService/customer.service';
import { ErrorHandlerService } from 'src/app/services/ErrorHandlerService/error-handler.service';
import { pswval } from 'src/app/Validator';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  errorMessage:string="";
  captcha:string="";
  show1:boolean=true;
  show2:boolean=false;
  constructor(private router:Router,private http:HttpClient,private cusservice:CustomerService,private errorhandler:ErrorHandlerService) { }

  ngOnInit(): void {
    this.refresh();
  }
  

  changepasswordform=new FormGroup(
    {
      Email:new FormControl("",[Validators.required,Validators.email]),
      NewPassword:new FormControl("",Validators.required),
      ConfirmPassword:new FormControl("",[Validators.required,pswval])
    }
  )
  
  Changepsw()
  {
    let email = this.changepasswordform.value.Email;
     this.change(this.changepasswordform.value.Email,this.changepasswordform.value.NewPassword);
     this.changepasswordform.reset();
     this.router.navigate([`login/${email}`])
  }

  change(Email:string,Password:string)
  {
    var a=this.cusservice.ChangePassword(Email,Password).subscribe(mail=>{},(error)=>
    {
      this.errorhandler.handleError(error);
          this.errorMessage = this.errorhandler.errorMessage;
           alert("user doesn't exist")
    });
    console.log(a);
  }
  Validateform=new FormGroup(
    {
      Email:new FormControl("",[Validators.required,Validators.email]),
      recaptcha:new FormControl("",[Validators.required])
    }
  )

  submit()
  {
    if(!(this.Validateform.value.recaptcha==this.captcha))
    alert("enter valid captcha");
    else
    this.Validateform.reset();
    this.show1=false;
    this.show2=true
  }
  refresh()
  {
    let emptyArr:any=[];
    let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        for(let i=0;i<7;i++)
        {
          emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
        }
        this.captcha=emptyArr.join('')
        //console.log(this.captcha);
  }
}
