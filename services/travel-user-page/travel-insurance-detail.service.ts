import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Userpagedetails } from 'src/app/models/userpagedetails';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class TravelInsuranceDetailService {
  readonly baseURL = 'https://localhost:44347/api/TravelInsurances/GetInsuranceDetails';
  readonly baseURL1 = 'https://localhost:44347/api/VehicleInsurances/GetVehicleInsuranceDetails';
  readonly PDFurl = 'https://localhost:44347/api/PdfGenerator';
  list: Userpagedetails[] = [];

  constructor(private http:HttpClient) { }

  getTravelInsuranceDetails(email:string){
    return this.http.get(`${this.baseURL}/${email}`)
  }
  getVehicleInsuranceDetails(email:string){
    return this.http.get(`${this.baseURL1}/${email}`)
  }
  public downloadPdf(contact:any, id:any):void{
    this.http.get('https://localhost:44347/api/PdfGenerator/'+contact+'/'+id,{responseType:'arraybuffer'}).subscribe(pdfResponse=>{
      const blob = new Blob([pdfResponse],{type:'application/pdf'});
      const fileName='PolicyDocument.pdf';
      saveAs(blob,fileName);     
    },err=>{
      console.log('Faced error while downloading file');
    })
  }

}
