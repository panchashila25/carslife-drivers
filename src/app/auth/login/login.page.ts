import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public route :Router) { }
  mobile:any='';
  otp:any='';
  








  ngOnInit() {
  }

  loginpage(){
    this.route.navigate(['/tab/dashboard'])

  }

}
