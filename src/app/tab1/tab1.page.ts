import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
ApproveList:any=[]
DriverData:any=[]
currentDate=new Date()
previousDate:any;
EndDate:any
LastDate:any;
length:any;
toDate:any;
EndToDate:any;
TotalRidesCompleted=0;
TotalPendingRides=0;
  constructor(private api:ApiService,private auth:AuthService) {}
  ngOnInit(): void {
    this.api.GetallBookings({driver:this.auth.currentUserValue._id,status:'approve'}).subscribe((cdata:any)=>{
      this.ApproveList=cdata.data
      console.log(this.ApproveList)
      this.myfun1()
    })
    this.api.GetallDriver({userId:this.auth.currentUserValue._id}).subscribe((cdata:any)=>{
    this.DriverData=cdata.data
    })
    this.api.GetallBookings({driver:this.auth.currentUserValue._id,status:'Completed'}).subscribe((cdata:any)=>{
      this.TotalRidesCompleted=cdata.totalItems
    })
    this.api.GetallBookings({driver:this.auth.currentUserValue._id,status:'pending'}).subscribe((cdata:any)=>{
      this.TotalPendingRides=cdata.totalItems
    })
  }

  myfun1(){
    for(let a=0;a<this.ApproveList.length;a++){
      this.LastDate=this.ApproveList[a].fromDate
      this.toDate=this.ApproveList[a].toDate
      const todateObject:Date=new Date(this.toDate)
      const dateObject: Date = new Date(this.LastDate);
      this.EndDate=new Date(dateObject)
      this.EndToDate=new Date(todateObject)
      this.myfun2(a)
    }
  }

  myfun2(index:any){
    const FinalcurrentDate=this.currentDate.getTime()
    const FinalEndDate=this.EndDate.getTime()
    let FinalEndToDate=this.EndToDate.getTime()
    console.log("Current Date :-"+FinalcurrentDate)
    console.log("End Date :-"+FinalEndDate)
    if(FinalEndToDate){
      if(FinalcurrentDate>FinalEndDate){
        const data=JSON.stringify({
          status:"Completed"
        })
        this.api.updateBookings(this.ApproveList[index]._id,data).subscribe((cdata:any)=>{
          console.log(cdata)
        })
      }
    }
    else{
      if(FinalcurrentDate>FinalEndDate){
        const data=JSON.stringify({
          status:"Completed"
      })
      this.api.updateBookings(this.ApproveList[index]._id,data).subscribe((cdata:any)=>{
        console.log(cdata)
    })
  }
}
  }
}

  









