import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-purchas-history',
  templateUrl: './purchas-history.component.html',
  styleUrls: ['./purchas-history.component.css']
})
export class PurchasHistoryComponent implements OnInit {

  userDetails:any;
  item:any;
  purchasedDetails:any = [];

  constructor(private _auth:AuthService, private _toastr: ToastrService){

  }

  ngOnInit(): void {
    this.getUser();
    this.getPurchasedData();
  }

  getUser() {
    this.userDetails = sessionStorage.getItem('username') != null ? sessionStorage.getItem('username')?.toString() : '';
  }

  getPurchasedData(){
    this._auth.getAllPurchases().subscribe((res)=>{
      this.item = res;
      for(let items of this.item){
        if(items.userID === this.userDetails){
          this.purchasedDetails.push(items);
        }
      }
    })
  }

  changeClaim(item:any){
    item.claimed = true;
    this._auth.updatePurchases(item.id, item).subscribe(res=>{
      if(res){
        this._toastr.success("You Have Successfully Claim "+ item.name +" Policy", " Congratulation " +item.detailFullname);
      }
    })
  }
}
