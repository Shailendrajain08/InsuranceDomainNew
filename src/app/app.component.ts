import { Component,DoCheck } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'Policy Domain';
  isadmin=false;
  isAgent = false;
  isCustomer = false;
  isMenuVisible=false;
  constructor(private route:Router){
    let role=sessionStorage.getItem('role');
    if(role=='admin'){
      this.isadmin=true;
    }
  }
  ngDoCheck(): void {
    let currentroute = this.route.url;
    let role=sessionStorage.getItem('role');
    if (currentroute == '/login' || currentroute == '/register') {
      this.isMenuVisible = false
    } else {
      this.isMenuVisible = true
    }

    if (role == 'admin') {
      this.isadmin = true;
    } else if (role == 'agent') {
      this.isAgent = true;
    } else if (role == 'customer') {
      this.isCustomer = true;
    }else{
      this.isadmin = false;
      this.isAgent = false;
      this.isCustomer = false;
    }


  }
}
