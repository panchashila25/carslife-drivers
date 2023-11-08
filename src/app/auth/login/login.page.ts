import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { AuthService } from 'src/app/core/auth.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 

  constructor(public route :Router, private auth:AuthService,public toast:ToastController,private api:ApiService ) { }
  mobile:any='';
  otp:any='';
  auths:any;
  isRegister = false
  isSendOTP = false;
  staticotp= 1234;
  name:any = "";
  email:any = "";
  isOTPSent = false;
  OTP=0;
  value=false;
  values=false
  






  // Generate a random four-digit number




  


  mobileCheck(event:any){
    if(event.target.value.toString().length == 10){
      this.api.GetallDriver({mobile:parseInt(event.target.value),role:"driver"},1,1,"").subscribe(us => {
        if(us.data.length == 0){
          this.isRegister = false
          this.isSendOTP = true;
        }
      });
    }else{
      this.isRegister = true;
      this.isSendOTP = false;
    }
    
  }


  onMobileInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const inputValue = input.value.replace(/\D/g, '').substr(0, 10);
    input.value = inputValue;
    this.mobile = inputValue;
  }
   
  sendOTP(){
  
      if(this.mobile == undefined || this.mobile == '' || this.mobile ==  null){
        this.presentToast("danger","Please enter mobile no.")
        return;
      }
      if(this.mobile.toString().length != 10){
        this.presentToast("danger","Please enter valid 10 digit mobile no.")
        return;
      }
      
      
      const data=JSON.stringify({
        mobile:this.mobile,
      })
      this.api.sendOTP(data).subscribe((cdata:any)=>{
      console.log(cdata);
      this.sendOTP=cdata.data.otp;
      this.OTP=cdata.data.otp;

      this.isOTPSent=true;
      },error => {
        this.presentToast("danger","Driver Not Found")
      })
    
  }





  onOtpChange(event:any){
    if(event.length == 4){
      this.otp = event
    }
  }
  getOtp(){
    let data = JSON.stringify({
    mobile:this.mobile,
    otp:this.otp
    })

    
    if(this.OTP==this.otp){
      this.api.login(data).subscribe((cdata:any)=>{
        console.log(cdata);
        localStorage.setItem('currentUser', JSON.stringify(cdata.data));
        this.auth.currentUserSubject.next(cdata.data);
      },error =>{
        this.presentToast("danger",error.message)
      })
      this.validateOtp()
    }
    else{
      this.presentToast("danger","Please Enter Valid OTP")
    }
  }




  validateOtp(){
    if(this.otp==this.OTP){
      this.route.navigate(['/tab/dashboard'])
    }
}

notvalid(){
  if(this.otp!=this.OTP){
this.value=true
  }
}





  async presentToast(color:any, message:any){
    const toastr = await this.toast.create({
      message:message,
      color:color,
      duration:3000,
      position:'top'
    })
    await toastr.present();
  }





  ngOnInit() {
  }

  loginpage(){
    this.route.navigate(['/tab/dashboard'])

  }

}
