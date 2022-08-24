import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMainComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
    
  }

  logout()
  {
    localStorage.removeItem('emailId');
    localStorage.removeItem('contact');
    this.route.navigate(['/home']);
  }
}
