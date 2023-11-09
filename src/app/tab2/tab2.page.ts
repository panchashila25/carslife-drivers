import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';
import { AuthService } from '../core/auth.service';
import { find } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  implements OnInit{

  data=false;
  // features: any[] = [
  //   {id: 1, name: 'Add', src: 'assets/img/add-money.jpg', background: 'rgba(27,150,181, 0.1)', page: ''},
  //   {id: 2, name: 'Withdraw', src: 'assets/img/withdraw.jpg', background: 'rgba(106,100,255, 0.1)', page: ''},
  //   {id: 3, name: 'Send', src: 'assets/img/send.jpg', background: 'rgba(255, 196, 9, 0.1)', page: ''},
  //   {id: 4, name: 'Pay', src: 'assets/img/pay.jpg', background: 'rgba(27,150,181, 0.1)', page: ''},
  // ];

  transactions: any[] = [
    {id: 1, vendor: 'Added to wallet', image: '', amount: 1500, time: '3:00PM'},
    {id: 2, vendor: 'Debited from wallet', image: '', amount: -1200, time: '4:00PM'}
  ];

  balances=0;
  finalBalance=0
  amount:any="";
  Withdraw=false;
  add=true
  credit="credit"
  finalData:any;
  driverId:any;
  list:any=[];
  Transaction:any=[];
  discription="Amount credited Sucessfully"
  constructor(public api:ApiService,public auth:AuthService)  {}
  ngOnInit(): void {
    this.driverId=this.auth.currentUserValue._id
    console.log(this.driverId)

    
    this.api.getAllUser({_id:this.driverId}).subscribe((cdata:any)=>{
      this.list=cdata.data
      console.log(this.list)
    })

    this.api.getTransaction({driver:this.driverId}).subscribe((data:any)=>{
      this.Transaction=data.data
      console.log(this.Transaction)
    })
  }

  addmoney(){
    this.data=true;
  }

  Withdrawmoney(){
    this.Withdraw=true;
    this.add=false
  }




   createTransaction(){
    const data=JSON.stringify(({
      balance:this.amount,
      transactionType:this.credit,
      discription:this.discription,
      driver:this.driverId
    }))
    this.api.createTransaction((data)).subscribe((cdata:any)=>{
      console.log(cdata)
    })
   }





}
