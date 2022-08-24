import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { dateval } from 'src/app/Validator';
import { InsuranceModel } from 'src/app/models/Insurance-model';
import { PaymentModel } from 'src/app/models/payment-model';
import { TravelDetailsModel } from 'src/app/models/traveldetails-model';
import { ErrorHandlerService } from 'src/app/services/ErrorHandlerService/error-handler.service';
import { TravelPremiumService } from 'src/app/services/travel-premium-calculate/travel-premium.service';
import { TraveldetailsService } from 'src/app/services/TravelDetails/traveldetails.service';
import { TravelinsuranceService } from 'src/app/services/TravelInsurance/travelinsurance.service';
import { TravelpaymentService } from 'src/app/services/TravelPayment/travelpayment.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.css']
})
export class TravelDetailsComponent implements OnInit {
public show1:boolean=true;
public show2:boolean=false;
public show3:boolean=false;
public premiumAmount:any;
public confirm:string="";
public insuremodel:any

  errorMessage: any;
  constructor(private router:Router,private travel:TravelDetailsModel,private formbuild:FormBuilder,private calamount:TravelPremiumService,private errorhandler:ErrorHandlerService,private traveldetailsservice:TraveldetailsService,private insuranceservice:TravelinsuranceService,private paymentservice:TravelpaymentService,private insurance:InsuranceModel,private payment:PaymentModel) { }

  ngOnInit(): void {
    let email = localStorage.getItem('emailId')
    console.log(email)
  }
  TravelForm=new FormGroup(
    {
      TravelType:new FormControl("",[Validators.required]),
      TravelMode:new FormControl("",[Validators.required]),
      Age:new FormControl("",Validators.required),
      StartDate:new FormControl("",Validators.required),
      EndDate:new FormControl("",[Validators.required,dateval]),
      PolicyType:new FormControl("",Validators.required),
      TravelPolicyNumber:new FormControl(),
      InsuranceId:new FormControl()
    }
  );
  TermsForm=new FormGroup(
    {
      terms:new FormControl("",Validators.required)
    }
  );
  PaymentForm=new FormGroup(
    {
      Contact:new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
      cardno:new FormControl("",[Validators.required,Validators.minLength(16),Validators.maxLength(16)]),
      ccv:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(3)])
    }
  )

  Submit()
  {
    
    this.show2=true;
    this.show1=false;
    let controlvalue:Date=new Date(this.TravelForm.value.StartDate);
    let comparevalue:Date=new Date(this.TravelForm.value.EndDate);
    let difference_in_time=controlvalue.getTime()-comparevalue.getTime();
    let diff_in_days=difference_in_time/(1000*3600*24);
    this.calamount.getPremium(this.TravelForm.value.TravelType,this.TravelForm.value.PolicyType,diff_in_days,this.TravelForm.value.Age)
    .subscribe((result:any)=>{this.premiumAmount=result});
  }
  Pay()
  {
    this.show3=true;
    this.show1=false;
    this.show2=false;
  }
  Payment()
  {
    this.insurance.Contact=this.PaymentForm.value.Contact;
    this.travel.TravelType=this.TravelForm.value.TravelType;
    this.travel.TravelMode=this.TravelForm.value.TravelMode;
    this.travel.StartDate=this.TravelForm.value.StartDate;
    this.travel.EndDate=this.TravelForm.value.EndDate;
    this.travel.PolicyType=this.TravelForm.value.PolicyType;
    this.travel.Age=this.TravelForm.value.Age;
    this.travel.TravelPolicyNumber="";
    this.payment.Contact=this.PaymentForm.value.Contact;
      this.payment.PremiumAmount=this.premiumAmount;
   /* this.createInsurance(this.insurance);
    this.insuranceservice.getinsuranceid(this.PaymentForm.value.Contact).subscribe((result:any)=>{this.insuremodel=result;console.log(this.insuremodel)
    this.travel.InsuranceId=this.insuremodel+1;
    this.payment.InsuranceId=this.insuremodel+1;
    this.Createtravel(this.travel);
    this.createPayment(this.payment);*/

    this.insuranceservice.CreateInsurance(this.insurance).subscribe((result)=>{this.insuremodel=result
    this.travel.InsuranceId=this.insuremodel;
    this.payment.InsuranceId=this.insuremodel;
      this.traveldetailsservice.CreateTravelDetails(this.travel).subscribe();
    this.paymentservice.createPayment(this.payment).subscribe();
    this.TravelForm.reset();
      this.TermsForm.reset();
      this.PaymentForm.reset();
      let email =localStorage.getItem("emailId");
      this.router.navigate(['/user/homepage']);
    },
    (error)=>
    {
      this.errorhandler.handleError(error);
          this.errorMessage = this.errorhandler.errorMessage;
       alert("conflict occured try again!!!");
       this.show1=true;
       this.show2=false;
       this.show3=false;
    }
    );
  
    
      
      
      
    

     
    
    
  }
  Createtravel(traveldet:TravelDetailsModel)
{

 var a=this.traveldetailsservice.CreateTravelDetails(traveldet).subscribe(traveldet=>
  {
    
  },
  (error)=>
  {
    this.errorhandler.handleError(error);
        this.errorMessage = this.errorhandler.errorMessage;
     
  }
  );
  console.log(a);
  
}

createInsurance(insurance:InsuranceModel)
{
  var a=this.insuranceservice.CreateInsurance(insurance).subscribe(insurance=>
    {
      
    },
    (error)=>
    {
      this.errorhandler.handleError(error);
          this.errorMessage = this.errorhandler.errorMessage;
       
    }
    );
    console.log(a);
    this.confirm="yes";
    console.log(this.confirm);
    //return "yes";
}
createPayment(payment:PaymentModel)
{
  var a=this.paymentservice.createPayment(payment).subscribe(payment=>
    {
      this.TravelForm.reset();
      this.TermsForm.reset();
      this.PaymentForm.reset();
      let email =localStorage.getItem("emailId");
        this.router.navigate([`login/${email}`])
  
    },
    (error)=>
    {
      this.errorhandler.handleError(error);
          this.errorMessage = this.errorhandler.errorMessage;
       
    }
    );
    console.log(a);
}
createmap()
{

}
}
