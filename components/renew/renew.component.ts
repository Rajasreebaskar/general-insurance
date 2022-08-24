import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InsuranceModel } from 'src/app/models/Insurance-model';
import { PaymentModel } from 'src/app/models/payment-model';
import { VechicleInsurance } from 'src/app/models/VechicleInsurance';
import { TravelinsuranceService } from 'src/app/services/TravelInsurance/travelinsurance.service';
import { VechicleInsuranceService } from 'src/app/services/vechicle-insurance.service';
import { VehiclePremiumCalculatorService } from 'src/app/services/vehicle-premium-calculator/vehicle-premium-calculator.service';

@Component({
  selector: 'app-renew',
  templateUrl: './renew.component.html',
  styleUrls: ['./renew.component.css']
})
export class RenewComponent implements OnInit {
  
  public show1:boolean=true;
  public show2:boolean=false;
  public show3:boolean=false;
  public show4:boolean=false;
  pymt:PaymentModel = new PaymentModel();
  in:InsuranceModel = new InsuranceModel();
  renewDetails: any;
  contactNo:string="";
  policyNo:string="";
  email:string="";
  products = [
    { id: 0, name: 'Third party liability' },
    { id: 1, name: 'comprehensive' },
  
  ];

  years = [
    { id: 0, name: '1' },
    { id: 1, name: '2' },
    { id:2,  name:'3'}
  
  ];
  premiumAmount: number=0;
  constructor(private tvs:TravelinsuranceService,private RenewVechicle:VechicleInsuranceService, public vec:VechicleInsurance, private vehiclePremiumCalculatorService:VehiclePremiumCalculatorService ) { }

  ngOnInit(): void {
  }
}
  
//   displayDetails(){
//     this.show2=true;
//     this.show1=false;

//     this.RenewVechicle.RenewDetails(this.email).subscribe((i:any)=>this.renewDetails.body = i);
//     console.log(JSON.stringify(this.renewDetails.issueDate) );
//     console.log(this.renewDetails)
//     //console.log(this.renewDetails.issueDate)
//     //var aYearFromNow = new Date(Date.parse(this.renewDetails.body.issueDate));
//     //aYearFromNow.setFullYear(aYearFromNow.getFullYear() + 1);
//     //console.log(aYearFromNow);    
//   }
//   monthDiff(d1:Date, d2:Date) {
//     var months;
//     months = (d2.getFullYear() - d1.getFullYear()) * 12;
//     months -= d1.getMonth();
//     months += d2.getMonth();
//     return months <= 0 ? 0 : months;
//  }

//   onSubmit()
//   {
//     //this.vec.VehicleType=this.reg.VehicleType;
    
//     console.log(this.vec);
    
//     // this.currentDate = new Date();
//     // this.pd =new Date(this.reg.PurchasedDate);
//     // // console.log(this.pd.getFullYear());
//     // this.age=this.monthDiff(this.pd,this.currentDate);
//     // console.log(this.age);

//     // if(this.vec.PlanType=="comprehensive")
//     // {
//     //   this.vehiclePremiumCalculatorService.getPremiumEstimate(this.age,this.price).subscribe(result=>{
//     //     this.premiumAmount=result;
//     //   });
//     // }
//     // else
//     // {
//     //   console.log(0.02*(this.price));
//     //   this.premiumAmount=0.02*this.price;
//     // }
//     this.show3=true;
//     this.show2=false;
//     this.show1 =false;
    
  


//   }
//   TermsForm=new FormGroup(
//     {
//       terms:new FormControl("",Validators.required)
//     }
//   );

//   PaymentForm=new FormGroup(
//     {
//       Contact:new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
//       cardno:new FormControl("",[Validators.required,Validators.minLength(16),Validators.maxLength(16)]),
//       ccv:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(3)])
//     }
//   );

//   // pay(){
//   //   this.pymt.Contact=this.PaymentForm.value.Contact;
//   //   this.pymt.PremiumAmount= this.premiumAmount;
//   //   this.in.Contact=this.PaymentForm.value.Contact;
//   //   this.in.PolicyType="vehicle";
//   //   console.log(this.in);
//   //   console.log(this.PaymentForm);
//   //   this.vec.VehiclePolicyNumber=this.reg.RegistrationNumber;
//   //   this.tvs.CreateInsurance(this.in).subscribe((result:any)=>{this.insuranceid=result; this.vec.InsuranceId=this.insuranceid;
//   //   this.VehicleInsuranceService.VechicleInsurance(this.vec).subscribe();
//   //   this.pymt.InsuranceId=this.insuranceid;
//   //   this.pmt.createPayment(this.pymt).subscribe();

//   // }
//   }
