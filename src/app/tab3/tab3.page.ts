import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
List:any=[]
driverId=this.auth.currentUserValue._id
  constructor(private api:ApiService,private auth:AuthService) {}
  ngOnInit(): void {
    console.log(this.driverId)

    this.api.GetallBookings({driver:this.driverId,status:'pending'}).subscribe((cdata:any)=>{
      console.log(cdata)
    })
  }


}
