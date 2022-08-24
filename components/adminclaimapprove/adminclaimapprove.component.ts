import { Component, OnInit } from '@angular/core';
import { InsuranceModel } from 'src/app/models/Insurance-model';
import { ClaimApplicationService } from 'src/app/services/claim-application/claim-application.service';
import { CustomerService } from 'src/app/services/CustomerService/customer.service';
import { ErrorHandlerService } from 'src/app/services/ErrorHandlerService/error-handler.service';
import { TraveldetailsService } from 'src/app/services/TravelDetails/traveldetails.service';
import { TravelinsuranceService } from 'src/app/services/TravelInsurance/travelinsurance.service';
import { TravelpaymentService } from 'src/app/services/TravelPayment/travelpayment.service';
import { VechicleInsuranceService } from 'src/app/services/vechicle-insurance.service';

@Component({
  selector: 'app-adminclaimapprove',
  templateUrl: './adminclaimapprove.component.html',
  styleUrls: ['./adminclaimapprove.component.css']
})
export class AdminclaimapproveComponent implements OnInit {
   static  insuranceid:any;
   static claimid:any;
   vehicledet:any=[]
   InsureAmount:number=0;
   datavalues:any=[];
   insurancevalues:any=[]
   paymentdet:any=[];
   cusdet:any=[];
   traveldet:any=[];
   insurancedet:any=[];
   show1:boolean=true;
   show2:boolean=false;
   temp:any;
   showvehicle:boolean=false;
   showtravel:boolean=true;
   showsetbtn:boolean=false;
  constructor(private vehicleinsurance:VechicleInsuranceService,private paymentservice:TravelpaymentService,private errorhandler:ErrorHandlerService,private claim:ClaimApplicationService,private customer:CustomerService,private insurance:TravelinsuranceService,private travel:TraveldetailsService) { }

  ngOnInit(): void {
     console.log(this.traveldet)
    this.claim.getallclaim().subscribe((res) => {
      for(let key in res)
      {
        this.datavalues.push(res[key]);
        
      }
  });
   
  }

  onapprove(claimId:number,contact:string,insuranceId:number)
  {  
    AdminclaimapproveComponent.insuranceid=insuranceId;
    AdminclaimapproveComponent.claimid=claimId;
    this.customer.getcusbycontact(contact).subscribe((res)=>{
    this.cusdet.push(res)
   console.log(this.cusdet);
    } );
    
    this.insurance.GetInsurancebyId(insuranceId).subscribe((res)=>{this.insurancevalues=res;
      this.temp=this.insurancevalues.insuranceId;
      this.insurancedet.push(this.insurancevalues);
      if(this.insurancevalues.policyType=="Travel")
      {
        this.travel.getbyInsuranceid(this.temp).subscribe((res)=>{ this.traveldet.push(res);});
        this.showvehicle=false;
        this.showtravel=true;
      }
      else{
        this.vehicleinsurance.GetVehicleplanbyid(this.temp).subscribe((res)=>{this.vehicledet.push(res); console.log(res)});
         this.showvehicle=true;
         this.showtravel=false;   
      }
      
      this.paymentservice.GetPayment(this.temp).subscribe((res)=>{this.paymentdet.push(res);});
    });
  
    this.show1=false;
   this.show2=true;
  }
  SetPayment()
  {
    this.showsetbtn=true;
  }
  Reject()
  {
    this.claim.ChangeStatus(AdminclaimapproveComponent.claimid,this.InsureAmount).subscribe();
    this.datavalues.pop(AdminclaimapproveComponent.claimid);
    this.show1=true;
    this.show2=false;
  }
  Submit()
  {
    console.log(this.InsureAmount);
    this.claim.ChangeStatus(AdminclaimapproveComponent.claimid,this.InsureAmount).subscribe();
    this.InsureAmount=0;
    this.datavalues.pop(AdminclaimapproveComponent.claimid);
    this.show1=true;
    this.show2=false;
  }
 
}
