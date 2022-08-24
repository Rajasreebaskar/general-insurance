import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbar',
  templateUrl: './dashbar.component.html',
  styleUrls: ['./dashbar.component.css']
})
export class DashbarComponent implements OnInit {
show:boolean=true;
  constructor(private route:Router) { }

  ngOnInit(): void {
  if(this.route.url==='/home')
  {
    this.show=true;
  }
  else
  this.show=false;
  }
 ngOnChange()
 {

 }
 slideIndex:number = 0;

  images = [  
    { img: "assets/images/HomePage1.jpg" },  
    { img: "assets/images/HomePage2.jpg" },  
    { img: "assets/images/TravelInsurance.jpg"}
    
      
  ];
 
  slideConfig = {  
    "slidesToShow": 2,  
    "slidesToScroll": 2,  
    "dots": true,  
    "infinite": true  
  };

  onclick()
  {
    this.show=false;
  
  }
onadinclick()
{
  this.show=true;
}

}
