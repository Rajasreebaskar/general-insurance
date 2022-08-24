import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Register } from 'src/app/models/Register';
import { VechicleInsurance } from 'src/app/models/VechicleInsurance';
import { VechicleRegistrationService } from 'src/app/services/vechicle-registration.service';
import { DatePipe } from '@angular/common';
import { InsuranceModel } from 'src/app/models/Insurance-model';
import { VehiclePremiumCalculatorService } from 'src/app/services/vehicle-premium-calculator/vehicle-premium-calculator.service';
import { VechicleInsuranceService } from 'src/app/services/vechicle-insurance.service';
import { TravelinsuranceService } from 'src/app/services/TravelInsurance/travelinsurance.service';
import { TravelpaymentService } from 'src/app/services/TravelPayment/travelpayment.service';
import { PaymentModel } from 'src/app/models/customer-model copy';

type VehicleDetails = {
  id:number;
  name:string;
  category?:string[];
};

type vehicleDetails = VehicleDetails[];

@Component({
  selector: 'app-buy-inusrance',
  templateUrl: './buy-inusrance.component.html',
  styleUrls: ['./buy-inusrance.component.css']
})

export class BuyInusranceComponent implements OnInit 
{

  vehicleBrand:string = "";
  currentDate:Date | undefined;
  age:number=0;
  pd:Date| undefined;
  
  public show1:boolean=true;
  public show2:boolean=false;
  public show3:boolean=false;
  public price:number=0;

    // rForm: NgForm;
  
  @Input() vehicleDetail:vehicleDetails=[];
  reg: Register = new Register();
  vec: VechicleInsurance = new VechicleInsurance();



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
  
  in:InsuranceModel = new InsuranceModel();
  insuranceid:number = 0 ;
  pymt:PaymentModel = new PaymentModel();

  constructor( private route: Router, private vechicleReg : VechicleRegistrationService,private vehiclePremiumCalculatorService: VehiclePremiumCalculatorService, private VehicleInsuranceService:VechicleInsuranceService, private tvs:TravelinsuranceService, private pmt:TravelpaymentService) {
    this.vehicleDetail=[
      {id : 1 , name: "Car", category:["Maruti", "Honda"]},
      {id : 2 , name: "Bike", category:["Bajaj", "Royal Enfield"]},
    ]
    // this.reg.userName = "chirag";
    // this.reg.userPassword = "Chirag@12";
    // this.reg.userEmail = "chirag@lti.com";
    // this.reg.userPhone = "9090909090";
  }

  ngOnInit(): void {
    
   
    
  }

  onChange(event: any) {
    console.log(event.name);
  }

  submitted():void{
    console.log(this.price);
    this.show2=true;
    this.show1=false;
    //this.reg=data;
    this.vechicleReg.postVechicle(this.reg).subscribe(data => console.log("abcd")); 
    // this.router.navigate(['/test'+'/'+ this.reg.VehicleType+'/'+this.reg.RegistrationNumber]);
  }

   monthDiff(d1:Date, d2:Date) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

  onSubmit()
  {
    this.vec.VehicleType=this.reg.VehicleType;
    
    console.log(this.vec);
    
    this.currentDate = new Date();
    this.pd =new Date(this.reg.PurchasedDate);
    // console.log(this.pd.getFullYear());
    this.age=this.monthDiff(this.pd,this.currentDate);
    console.log(this.age);

    if(this.vec.PlanType=="comprehensive")
    {
      console.log("hi");
      this.vehiclePremiumCalculatorService.getPremiumEstimate(this.age,this.price).subscribe(result=>{
        this.premiumAmount=result;
      });


    }
    else
    {
      console.log(0.02*(this.price));
      this.premiumAmount=0.02*this.price;
    }
    this.show3=true;
    this.show2=false;
    this.show1 =false;
    
  


  }
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
  

  pay()
  {
    
    this.pymt.Contact=this.PaymentForm.value.Contact;
    this.pymt.PremiumAmount= this.premiumAmount;
    this.in.Contact=this.PaymentForm.value.Contact;
    this.in.PolicyType="vehicle";
    console.log(this.in);
    console.log(this.PaymentForm);
    this.vec.VehiclePolicyNumber=this.reg.RegistrationNumber;
    this.tvs.CreateInsurance(this.in).subscribe((result:any)=>{this.insuranceid=result; this.vec.InsuranceId=this.insuranceid;
    this.VehicleInsuranceService.VechicleInsurance(this.vec).subscribe();
    this.pymt.InsuranceId=this.insuranceid;
    this.pmt.createPayment(this.pymt).subscribe(res=>{
      this.route.navigate(['/user/homepage']);
    },
    err=>{
      this.route.navigate(['/user/homepage']);
    });

     
    });
    

    
    
  }



}
function vechicles(vechicles: any) {
  throw new Error('Function not implemented.');
}


