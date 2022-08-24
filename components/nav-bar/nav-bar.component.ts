import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
