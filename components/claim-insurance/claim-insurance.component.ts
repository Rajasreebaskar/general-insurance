import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClaimFormData } from 'src/app/models/claim-application.models';
import { ClaimApplicationService } from 'src/app/services/claim-application/claim-application.service';

@Component({
  selector: 'app-claim-insurance',
  templateUrl: './claim-insurance.component.html',
  styleUrls: ['./claim-insurance.component.css']
})
export class ClaimInsuranceComponent implements OnInit {

  claimInsuranceForm = new FormGroup({
    policyNumber: new FormControl(),
    contact: new FormControl(),
    reason: new FormControl()
  });

  isError=false;
  isValidPolicy = false;

  travelClaimReason = ["Lost or stolen baggage", "Medical Expenses", "Trip Cancellation"];
  vehicleClaimReason = ["Natural Disaster", "Man-Made Disaster", "Road Accident", "Theft"];
  selectReason: string[] = [...this.travelClaimReason,...this.vehicleClaimReason];
  selectedButton: number = -1;

  constructor(private claimApplicationService: ClaimApplicationService,private route:Router) { }

  ngOnInit(): void {
    this.createForm();



  }


  createForm() {
    this.claimInsuranceForm = new FormGroup({
      policyNumber: new FormControl(null, [Validators.pattern("^[VT]{1}[0-9a-zA-Z]+_[a-zA-Z0-9]+$"),Validators.required]),
      contact: new FormControl(null, [Validators.pattern("^[1-9]{1}[0-9]{9}$"),Validators.required]),
      reason: new FormControl(null, )
    });


  }

  setReason(val: any, i: number) {
    this.claimInsuranceForm.value.reason = val;
    this.selectedButton = i;

  }

  changeSelectReason() {
    this.claimInsuranceForm.value.reason = null;
    if (this.claimInsuranceForm.value.policyNumber.startsWith("V")) {
      this.selectReason = this.vehicleClaimReason;
      this.isValidPolicy = true;
    }
    else if (this.claimInsuranceForm.value.policyNumber.startsWith("T")) {
      this.selectReason = this.travelClaimReason;
      this.isValidPolicy = true;  
    }
    else {
      this.isValidPolicy = false;

    }
    this.selectedButton = -1;
  }

  applyForClaim() {
    let claimData: ClaimFormData = new ClaimFormData(this.claimInsuranceForm.value.policyNumber, this.claimInsuranceForm.value.contact, this.claimInsuranceForm.value.reason);
    this.claimApplicationService.addClaim(claimData).subscribe(res => {
      this.isError=false;
      this.route.navigate(['user/claim-history']);
    },
    err=>{
      this.isError=true;
      setTimeout(()=>this.isError=false,8000);
    })
    this.claimInsuranceForm.reset();
    this.selectReason=[...this.travelClaimReason,...this.vehicleClaimReason];
    this.selectedButton=-1;
  }

  


}
