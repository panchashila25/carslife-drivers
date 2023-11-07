import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { AuthService } from 'src/app/core/auth.service';
import {Swiper}from 'swiper';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @ViewChild('carDocChild') carDocChild !:ElementRef;
  @ViewChild('personalDocChild') personalDocChild !:ElementRef;
  file:any;
  registrationdata:any;
  age:any="";
  constructor(public route:Router,public api:ApiService) { }
// Slider **************************************************************************************************************

slides:any = document.getElementsByClassName('slide');
prevBtn :any= document.getElementById('prevBtn');
nextBtn = document.getElementById('nextBtn');
currentSlide = 0;

policeVarify:any = "";
licenseDoc:any = "";
carDocument:any = "";
carphoto:any = "";

showSlide(slideIndex:any) {
  console.log(this.slides)
  for(let i =0;i<this.slides.length;i++){
    this.slides[i].style.display = i === slideIndex ? 'block' : 'none';
  }
}

goToSlide(slideIndex:any) {
  if (slideIndex < 0) {
    this.currentSlide = this.slides.length - 1;
  } else if (slideIndex >= this.slides.length) {
    this.currentSlide = 0;
  } else {
    this.currentSlide = slideIndex;
  }
  this.showSlide(this.currentSlide);
}

goPrev(){
  this.goToSlide(this.currentSlide - 1);
}

goNext(){
  this.goToSlide(this.currentSlide + 1);
}

showslide(){
  this.goToSlide(this.currentSlide);
};

// *************************************************************************************************************************************


// Reactive Form*****************************************************************************************************


RestristaionForm:any;
ngOnInit() {
  this.RestristaionForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    lastName:new FormControl('',[Validators.required]),
    mobile:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    govId:new FormControl('',[Validators.required]),
    gender:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    dob:new FormControl('',[Validators.required]),
    state:new FormControl('',[Validators.required]),
    packagePrice:new FormControl('',[Validators.required]),
    PackageKm:new FormControl('',[Validators.required]),
    ratePerKm:new FormControl('',[Validators.required]),
    pinCode:new FormControl('',[Validators.required]),



// Car Filed
    carName:new FormControl('',[Validators.required]),
    carNo:new FormControl('',[Validators.required]),
    carCategery:new FormControl('',[Validators.required]),
    perchaseYear:new FormControl('',[Validators.required]),
    licenseno:new FormControl('',[Validators.required]),
    modelName:new FormControl('',[Validators.required])

  })
}

onSubmit(){
  console.log(this.RestristaionForm)
  if(this.RestristaionForm.valid){
    this.registrationdata=this.RestristaionForm.value
    const data=JSON.stringify({
      name:this.registrationdata.name,
      gender:this.registrationdata.gender,
      dob:this.registrationdata.dob,
      age:this.age,
      mobile:this.registrationdata.mobile,
      email:this.registrationdata.email,
      licenseno:this.registrationdata.licenseno,
      licenseDoc:this.licenseDoc,
      aadharCardNo:this.registrationdata.govId,
      address:this.registrationdata.address,
      carDocument:this.carDocument,
      state:this.registrationdata.state,
      city:this.registrationdata.city,
      policeverifydoc:this.policeVarify,
      brandName:this.registrationdata.carCategery,
      modelName:this.registrationdata.modelName,
      carNo:this.registrationdata.carNo,
      purchesYear:this.registrationdata.perchaseYear,
      photo:this.carphoto,
      pincode:this.registrationdata.pinCode,
      packagePrice:this.registrationdata.packagePrice,
      ratePerKm:this.registrationdata.ratePerKm,
      PackageKm:this.registrationdata.PackageKm

    })
    console.log(data)
    this.api.createDriver(data).subscribe((cdata:any)=>{
      console.log(cdata);
    })

  }
}


calculateAge() {
  if (this.RestristaionForm.value.dob) {
    const today = new Date();
    console.log(this.RestristaionForm.value.dob)
    const birthDate = new Date(this.RestristaionForm.value.dob);
    const ageDiff = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      this.age  = ageDiff - 1;
      console.log(this.age)
    } else {
      this.age = ageDiff;
      console.log(this.age)
    }
  }
}

// ********************************************************************************************************************







  


uploadedfile(event:any){
  let fileData: FormData = new FormData();
  fileData.append('file', event.target.files[0]);
  this.api.onupload(fileData).subscribe((cData: any) => {
    console.log(cData)
    this. licenseDoc= cData.data.url;

    // setTimeout(() => {
    //   this.carDocChild.nativeElement.value = "";
    // }, 3000);
  });
}


uploadedfileCarDoc(event:any){
  let fileData: FormData = new FormData();
  fileData.append('file', event.target.files[0]);
  this.api.onupload(fileData).subscribe((cData: any) => {
    console.log(cData)
    this.carDocument = cData.data.url;

    // setTimeout(() => {
    //   this.carDocChild.nativeElement.value = "";
    // }, 3000);
  });
}





uploadedPolicevarify(event:any){
  let fileData: FormData = new FormData();
  fileData.append('file', event.target.files[0]);
  this.api.onupload(fileData).subscribe((cData: any) => {
    console.log(cData)
    this.policeVarify = cData.data.url;

    // setTimeout(() => {
    //   this.carDocChild.nativeElement.value = "";
    // }, 3000);
  });
}



uploadedCarphoto(event:any){
  let fileData: FormData = new FormData();
  fileData.append('file', event.target.files[0]);
  this.api.onupload(fileData).subscribe((cData: any) => {
    console.log(cData)
    this.carphoto = cData.data.url;

    // setTimeout(() => {
    //   this.carDocChild.nativeElement.value = "";
    // }, 3000);
  });
}
















  registration(){
    this.craeteDriver()
    this.route.navigate(['/tab/dashboard'])
  }



  craeteDriver(){

  }
}
