import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {

  constructor(private _auth: AuthService) {

  }

  ngOnInit(): void {
    this.getPolicies();
  }

  getPolicies() {
    this._auth.getPolicies().subscribe(res => {
      console.log(res)
    })
  }
}
