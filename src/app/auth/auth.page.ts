import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(public route:Router) { }

  ngOnInit() {
  }

  registration(){
    this.route.navigate(['/register'])
  }

  login(){
    this.route.navigate(['/login'])
  }
}
