import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swiper from 'swiper';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @ViewChild('swiper') swiper!:Swiper;
  swiperModules = ['IonicSlides'];
 public alertButtons = ['OK'];
  constructor(public route:Router) { }


RestristaionForm:any;


// Reactive Form*****************************************************************************************************
Regstristaion(){
  
}
// ********************************************************************************************************************

onSubmit(){
  if(this.RestristaionForm.valid){
    const registrationdata=this.RestristaionForm.value;
    console.log(registrationdata)
  }
}









  ngOnInit() {
    this.RestristaionForm=new FormGroup({
      name:new FormControl('',[Validators.required]),
      lastName:new FormControl('',[Validators.required]),
      mobile:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required]),
      address:new FormControl('',[Validators.required]),
      govId:new FormControl('',[Validators.required]),
      gender:new FormControl('',[Validators.required]),
      age:new FormControl('',[Validators.required]),
      carCategoty:new FormControl('',[Validators.required]),
  
  // Car Filed
      carName:new FormControl('',[Validators.required]),
      carNo:new FormControl('',[Validators.required]),
      perchaseYear:new FormControl('',[Validators.required]),
      carDocument:new FormControl('',[Validators.required]),
      licenseno:new FormControl('',[Validators.required]),
      carphoto:new FormControl('',[Validators.required]),
  
    })
  }

  
  loadImageFromDevice(data:any){
    
  }

  next(){
    this.swiper.slideNext()
  }

  prev(){
    this.swiper.slidePrev();
  }

  registration(){
    this.route.navigate(['/tab/dashboard'])
  }

}
