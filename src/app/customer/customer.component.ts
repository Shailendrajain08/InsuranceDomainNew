import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  item:any;
  purchasedDetails:any = [];

  constructor(private _auth: AuthService) {

  }

  ngOnInit(): void {
    this.getPurchasedData()
  }

  getPurchasedData(){
    this._auth.getAllPurchases().subscribe((res)=>{
      this.item = res;
      for(let items of this.item){
          this.purchasedDetails.push(items);
        }
    })
  }


}
