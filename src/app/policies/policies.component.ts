import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {
  tags: any = [];
  coverName: any = [];
  role: any;

  constructor(private _auth: AuthService, private activatedRoute:ActivatedRoute) {


  }

  ngOnInit(): void {
    this.getPolicies();
    this.getUserRole();
  }

  getPolicies() {
    this._auth.getPolicies().subscribe(res => {
      this.tags = res
      for (let item of this.tags) {
        this.coverName.push(item.coverName)
        this.coverName = this.coverName.filter((item: any,
          index: any) => this.coverName.indexOf(item) === index);
      }

      console.log(this.tags)
    })


  }

  getUserRole() {
    this.role = sessionStorage.getItem('role') != null ? sessionStorage.getItem('role')?.toString() : '';
    console.log("role", this.role)
  }



}
