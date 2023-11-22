import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { PushNotifications } from '@capacitor/push-notifications';

@Injectable({
  providedIn: 'root'
})
export class FcmService {

  constructor(private route:Router) { }

  public initpush(){
    if(Capacitor.platform! =='web'){
      this.registerPush();
    }
  }


  private registerPush(){
    PushNotifications.requestPermissions().then((permission)=>{
      if(permission.receive){
        PushNotifications.register();
      }
      else{

      }
    });
  }

}
