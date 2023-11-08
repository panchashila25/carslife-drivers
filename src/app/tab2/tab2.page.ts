import { Component } from '@angular/core';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  features: any[] = [
    {id: 1, name: 'Add', src: 'assets/img/add-money.jpg', background: 'rgba(27,150,181, 0.1)', page: ''},
    {id: 2, name: 'Withdraw', src: 'assets/img/withdraw.jpg', background: 'rgba(106,100,255, 0.1)', page: ''},
    {id: 3, name: 'Send', src: 'assets/img/send.jpg', background: 'rgba(255, 196, 9, 0.1)', page: ''},
    {id: 4, name: 'Pay', src: 'assets/img/pay.jpg', background: 'rgba(27,150,181, 0.1)', page: ''},
  ];

  transactions: any[] = [
    {id: 1, vendor: 'Added to wallet', image: '', amount: 1500, time: '3:00PM'},
    {id: 2, vendor: 'Debited from wallet', image: '', amount: -1200, time: '4:00PM'}
  ];

  constructor(public api:ApiService) {}
   createTransaction(){
    this.api.createTransaction
   }
}
