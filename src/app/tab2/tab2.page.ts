import { Component } from '@angular/core';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public api:ApiService) {}
   createTransaction(){
    this.api.createTransaction
   }
}