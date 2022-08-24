import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleModel } from 'src/app/models/vehicle.models';


@Injectable({
  providedIn: 'root'
})
export class VehiclePremiumCalculatorService {

  private basePath="https://localhost:44347/api/VehicleModels";
  
  constructor(private http:HttpClient) { }

  public getCarModels(): Observable<VehicleModel[]>{

    return this.http.get<VehicleModel[]>(this.basePath);

  }

  public getPremiumEstimate(age:number,price:number): Observable<number>{  
    return this.http.get<number>(this.basePath+"/"+age+"/"+price+"/premium");

  }

}
