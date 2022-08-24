import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TravelPremiumService } from 'src/app/services/travel-premium-calculate/travel-premium.service';

@Component({
  selector: 'app-travel-premium-calculator',
  templateUrl: './travel-premium-calculator.component.html',
  styleUrls: ['./travel-premium-calculator.component.css']
})
export class TravelPremiumCalculatorComponent implements OnInit {
  premiumAmount:any;
  travelPremiumCalculatorForm = new FormGroup({
    travelType: new FormControl(),
    policyType: new FormControl(),
    age: new FormControl(),
    days: new FormControl()
  });

  constructor(public service:TravelPremiumService) { }

  ngOnInit(): void {
  }
  CalculatePremium(){
    let age=this.travelPremiumCalculatorForm.value.age;
    let days=this.travelPremiumCalculatorForm.value.days;

    this.service.getPremium(this.travelPremiumCalculatorForm.value.travelType,this.travelPremiumCalculatorForm.value.policyType,days,age)
    .subscribe((result: any) => {
      //console.log(result);
      this.premiumAmount=result;
      console.log(this.travelPremiumCalculatorForm.value.travelType);
      console.log(this.travelPremiumCalculatorForm.value.policyType);
      console.log(days);
      console.log(age);
      console.log(this.premiumAmount);
    });
    
  }

}
