export class ClaimFormData{
   policyNumber:string=""; 
   contact:string="";
   reasonToClaim:string="";
   
   constructor(policy:string,contact:string,reasonToClaim:string){
      this.policyNumber=policy;
      this.contact=contact;
      this.reasonToClaim=reasonToClaim;
   }
}