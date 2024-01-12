import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userDetail:any;
  item:any;
  currentUser:any = []

  constructor(private _auth:AuthService){

  }

  ngOnInit(): void {
    this.getUser()
    this.getAllUser()

  }


  getUser() {
    this.userDetail = sessionStorage.getItem('username') != null ? sessionStorage.getItem('username')?.toString() : '';

  }

  getAllUser(){
    this._auth.Getall().subscribe(res=>{

      this.item = res;
      for(let items of this.item){
        if(items.id === this.userDetail){
          this.currentUser.push(items);

        }
      }
    })
  }
}
