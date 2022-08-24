import { Component, OnInit } from '@angular/core';
import { Claim } from 'src/app/models/claim.models';
import { ClaimApplicationService } from 'src/app/services/claim-application/claim-application.service';

@Component({
  selector: 'app-claim-history',
  templateUrl: './claim-history.component.html',
  styleUrls: ['./claim-history.component.css']
})
export class ClaimHistoryComponent implements OnInit {

 claimHistory:any;
 isDataAvailable=true;
  constructor(private claimApplicationService:ClaimApplicationService) { }

  ngOnInit(): void {
    this.getClaimHistory();  

  }

  getClaimHistory(){
   this.claimApplicationService.getClaimHistory().subscribe(data=> 
    {this.claimHistory=data.reverse();
      if(this.claimHistory.length==0){ 
        this.isDataAvailable=false;}
      }
    );
  }

}
