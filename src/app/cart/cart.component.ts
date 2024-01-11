import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  allPolicy:any;
  policyByID:any;
  coverName:any;
  policyname:any;
  category:any;
  coverage:any;
  benefits:any;
  price:any
  openPaymentGetway = false;

  constructor(private activatedRoute: ActivatedRoute,private _auth:AuthService, private builder: FormBuilder){
    activatedRoute.params.subscribe((params) => {
      if(params['id']){
        this._auth.getPolicies().subscribe(res=>{
          this.allPolicy = res
          this.policyByID = this.allPolicy.find((policie: any) => policie.id == params['id'])
          console.log(this.policyByID)
          this.coverName = this.policyByID.coverName;
          this.policyname = this.policyByID.name;
          this.category = this.policyByID.category;
          this.coverage = this.policyByID.coverage;
          this.benefits = this.policyByID.benefits;
          this.price = this.policyByID.price;
        })
      }
    })
  }

  detailForm = this.builder.group({
    detailFullname: this.builder.control('', Validators.required),
    detailEmail: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    detailContact:this.builder.control('', Validators.required),
    detailComment:this.builder.control('', Validators.required)
  });

  purchaceDetails(){
    if(this.detailForm.valid){
      this.policyByID.formDetail = this.detailForm.value;
      console.log(this.policyByID)
      this.openPaymentGetway = true;
    }
  }
}
