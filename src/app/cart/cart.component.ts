import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  allPolicy:any;
  policyByID:any = [];
  userDetails:any;
  coverName:any;
  policyname:any;
  category:any;
  coverage:any;
  benefits:any;
  price:any
  openPaymentGetway = true;

  constructor(private activatedRoute: ActivatedRoute,private _auth:AuthService, private builder: FormBuilder, private _router : Router, private toastr:ToastrService){
    activatedRoute.params.subscribe((params) => {
      if(params['id']){
        this._auth.getPolicies().subscribe(res=>{
          this.allPolicy = res
          this.policyByID= this.allPolicy.find((policie: any) => policie.id == params['id'])
          this.coverName = this.policyByID.coverName;
          this.policyname = this.policyByID.name;
          this.category = this.policyByID.category;
          this.coverage = this.policyByID.coverage;
          this.benefits = this.policyByID.benefits;
          this.price = this.policyByID.price;
          this.policyByID.policyID = this.policyByID.id
        })
      }
    })
  }

  ngOnInit(): void {
    this.getUser()
  }



  getUser() {
    this.userDetails = sessionStorage.getItem('username') != null ? sessionStorage.getItem('username')?.toString() : '';
  }

  detailForm = this.builder.group({
    detailFullname: this.builder.control('', Validators.required),
    detailEmail: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    detailContact:this.builder.control('', Validators.required),
    detailComment:this.builder.control('', Validators.required)
  });

  cardDetailForm = this.builder.group({
    cardHolderName: this.builder.control('', Validators.required),
    cardnumber: this.builder.control('', Validators.required),
    expmonth: this.builder.control('', Validators.required),
    expyear: this.builder.control('', Validators.required),
    cvv: this.builder.control('', Validators.required)
  });

  purchaceDetails(){
    if(this.detailForm.valid){
      this.policyByID.detailFullname = this.detailForm.value.detailFullname;
      this.policyByID.detailEmail = this.detailForm.value.detailEmail;
      this.policyByID.detailContact = this.detailForm.value.detailContact;
      this.policyByID.detailComment = this.detailForm.value.detailComment;
      this.openPaymentGetway = false;
    }
  }

  cardDetails(){
    if(this.cardDetailForm.valid){
      this.policyByID.cardHolderName= this.cardDetailForm.value.cardHolderName;
      this.policyByID.cardnumber= this.cardDetailForm.value.cardnumber;
      this.policyByID.expmonth= this.cardDetailForm.value.expmonth;
      this.policyByID.expyear= this.cardDetailForm.value.expyear;
      this.policyByID.expyear= this.cardDetailForm.value.expyear;
      this.policyByID.claimed = false;
      this.policyByID.userID = this.userDetails;
      this.policyByID.id = '';

      this._router.navigate(['MyPurchase'])
      this._auth.purchasedData(this.policyByID).subscribe(res=>{
        if(res){
          this.toastr.success("Purchased Successfull", "Congratulations")
        }else{
          this.toastr.success("Teansection Decline", "Somthing Went Wrong")
        }
      })
    }
  }
}
