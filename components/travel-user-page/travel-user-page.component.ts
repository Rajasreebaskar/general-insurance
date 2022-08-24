import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Userpagedetails } from 'src/app/models/userpagedetails';
import { CustomerService } from 'src/app/services/CustomerService/customer.service';
import { TravelInsuranceDetailService } from 'src/app/services/travel-user-page/travel-insurance-detail.service';

@Component({
  selector: 'app-travel-user-page',
  templateUrl: './travel-user-page.component.html',
  styleUrls: ['./travel-user-page.component.css']
})
export class TravelUserPageComponent implements OnInit {

  constructor(public service:TravelInsuranceDetailService, private activateRoute: ActivatedRoute, private custservice: CustomerService) { }
  email:any;
  data: any = [];
  vehicledata: any = [];
  custData: any = [];
  ngOnInit() {
    this.email = localStorage.getItem("emailId");
    this.CustomerData(this.email);
    this.TravelInsuranceDetails(this.email);
    this.VehicleInsuranceDetails(this.email);
  }
  TravelInsuranceDetails(emailId:string){
    this.service.getTravelInsuranceDetails(emailId).subscribe((res:any) => {
      console.log(this.data.body=res);
    });
  }
  VehicleInsuranceDetails(emailId:string){
    this.service.getVehicleInsuranceDetails(emailId).subscribe((res:any) => {
      console.log(this.vehicledata.body=res);
    });
  }

  CustomerData(email:string) {
    this.custservice.getCustomrByEmail(email).subscribe((res:any) => {
      console.log(this.custData = res);
    });
  }

  GeneratePDF(contact:any, insId:any){
   
    this.service.downloadPdf(contact,insId);
    //console.log(this.service.downloadPDF(contact,insId));
  }
}


