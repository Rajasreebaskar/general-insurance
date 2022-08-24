import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VehiclePremiumCalculatorService } from 'src/app/services/vehicle-premium-calculator/vehicle-premium-calculator.service';

@Component({
  selector: 'app-vehicle-premium-calculator',
  templateUrl: './vehicle-premium-calculator.component.html',
  styleUrls: ['./vehicle-premium-calculator.component.css']
})
export class VehiclePremiumCalculatorComponent implements OnInit {

 
  carModels:any;
  bikeModels:any;
  selectedModels:any;
  premiumAmount:number=-1;

  vehiclePremiumCalculatorForm = new FormGroup({
    vehicleType: new FormControl(),
    vehicleModel: new FormControl(),
    vehicleAge: new FormControl()
  });

  isError=false;
  constructor(private vehiclePremiumCalculatorService: VehiclePremiumCalculatorService) { }

  ngOnInit() {
    this.getCarModels();
    this.createForm();
  }

  createForm() {
    this.vehiclePremiumCalculatorForm = new FormGroup({
      vehicleType: new FormControl("Bike"),
      vehicleModel: new FormControl("0", [Validators.min(1),Validators.pattern("[1-9]+[0-9]+")]),
      vehicleAge: new FormControl(null, [Validators.min(0)])
    });
  }

  getCarModels(){
    this.vehiclePremiumCalculatorService.getCarModels().subscribe(result=>{
      this.carModels=result.filter(res=>res.modelType=="Car");
      this.bikeModels=result.filter(res=>res.modelType=="Bike");
      this.selectedModels=this.bikeModels;
    });
   
    
  }
  changeSelectModels(){
    if(this.vehiclePremiumCalculatorForm.value.vehicleType=="Car" || this.vehiclePremiumCalculatorForm.value.vehicleType==null){
      this.selectedModels=this.carModels;
    }
    else{
      this.selectedModels=this.bikeModels;
    }
    this.vehiclePremiumCalculatorForm.controls.vehicleModel.setValue("0",{onlySelf:true});  
  }

  calculatePremium(){
    let age=this.vehiclePremiumCalculatorForm.value.vehicleAge;
    let price=this.vehiclePremiumCalculatorForm.value.vehicleModel;

    this.vehiclePremiumCalculatorService.getPremiumEstimate(age,price).subscribe(result=>{
      this.premiumAmount=result;
      this.isError=false;
    },
      err=>{
        this.isError=true;
        setTimeout(()=>this.isError=false,8000);
      }
    );
  }

}
