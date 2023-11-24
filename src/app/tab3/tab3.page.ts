import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  List: any = []
  BookingList = []
  CalinderList = []
  date = ''
  Completed: any = []
  display = true;
  StartingDate:any;
  dummyDates:any = []
  EndingDate:any;
  difference:any
  dateList: Date[] = [];

  
  driverId = this.auth.currentUserValue._id
  constructor(private api: ApiService, private auth: AuthService) {
    this.highlightedDates  = async (isoString: any) => {
      const date = new Date(isoString);
      const tommorowDate = new Date(isoString);
      tommorowDate.setDate(date.getDate() + 1);
      
      return
    }
   }

  highlightedDates:any

  ngOnInit(): void {
    let dates:any = [];
    let dates2:any = []
    console.log(this.driverId)
    this.api.GetallBookings({driver:this.driverId,status:'pending'}).subscribe((cdata:any)=>{
      this.List=cdata.data
      
    })



    this.api.GetallBookings({driver:this.driverId}).subscribe((cdata:any)=>{
      this.Completed=cdata.data;
      console.log(this.Completed)
      for(let a=0;a<this.Completed.length;a++){
        this.StartingDate=this.Completed[a].fromDate
        this.EndingDate=this.Completed[a].toDate

       let array:any = []
        if(!this.EndingDate){
           if(this.Completed[a].status == 'approve'){
        this.dummyDates.push({date:new Date(this.StartingDate).toISOString().slice(0,10),textColor:"#fff",backgroundColor:"#36abe0"})
           }else{
            this.dummyDates.push({date:new Date(this.StartingDate).toISOString().slice(0,10),textColor:"#fff",backgroundColor:"#28ba62"})
           }
        }
        else{
          console.log(typeof(this.StartingDate))
          console.log(typeof(this.EndingDate))
  
          // Convert into Obj
          const dateObj1: Date = new Date(this.StartingDate);
          const dateObj2: Date = new Date(this.EndingDate);
  
          // Convert into Number
          let start=(Number(dateObj1));
          console.log(start)
          let end=(Number(dateObj2));
  
  
          // Calculate Diff
          const diff=end-start
  
          const difference: number = diff / (1000 * 60 * 60 * 24);
          console.log(difference)
  
          for(let p=0;p<difference;p++){
            let datevalue=(p*(1000*60*60*24))
            let datesvalues=datevalue+start
            const Finaldates=new Date(datesvalues)
            this.dateList.push(Finaldates)
          }
          if(this.Completed[a].status == 'approve'){
            this.dateList.forEach((res:any) => (this.dummyDates.push({date:new Date(res).toISOString().slice(0,10),textColor:"#fff",backgroundColor:"#36abe0"})))
          }else if(this.Completed[a].status == 'Completed'){
            this.dateList.forEach((res:any) => (this.dummyDates.push({date:new Date(res).toISOString().slice(0,10),textColor:"#fff",backgroundColor:"#28ba62"})))
          }
        }
      }});
    setTimeout(() => {
      this.display = true;
      this.highlightedDates =this.dummyDates
      console.log(this.highlightedDates)
    }, 5000);
    
  }

  myfun() {
    this.api.GetallBookings({}).subscribe((cdata) => {
      this.BookingList = cdata.data
      console.log(this.date)
      console.log(this.BookingList)
    })

  }


  // Approve By Driver
  Approve(id: any) {
    const data = JSON.stringify({
      status: "approve"
    })
    this.api.updateBookings(id, data).subscribe((cdata: any) => {
      console.log(cdata)
    })
  }


  // Reject By Driver
  Reject(id: any) {
    const datas = JSON.stringify({
      status: "rejected"
    })
    this.api.updateBookings(id, datas).subscribe((cdata: any) => {
      console.log(cdata)
    })


  }
}
