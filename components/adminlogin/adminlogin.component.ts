import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminloginService } from 'src/app/services/Adminlogin/adminlogin.service';
import { ErrorHandlerService } from 'src/app/services/ErrorHandlerService/error-handler.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private router: Router,private http:HttpClient,private errorhandler:ErrorHandlerService,private adminlogin:AdminloginService) { }

  ngOnInit(): void {
  }
  Adminloginform=new FormGroup(
    {
     Email:new FormControl(),
     Password:new FormControl()
    }
  )
  Submit()
  {
    this.verify(this.Adminloginform);
    
  }
  verify(Adminloginform:any)
  {
    var a=this.adminlogin.VerifyAdmin(this.Adminloginform.value.Email,this.Adminloginform.value.Password).subscribe(
      login=>
      {
        let email = this.Adminloginform.value.Email;
        this.Adminloginform.reset();
        localStorage.setItem('adminemailId',email)
        this.router.navigate(['admin'])
      }
      ,
      (error)=>
      {
        this.errorhandler.handleError(error);
      
        alert("Admin doesn't exists");
      }
    );
  }
}
