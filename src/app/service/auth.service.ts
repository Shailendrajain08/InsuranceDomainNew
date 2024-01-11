import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {

  }
  private apiurl='http://localhost:3000/user';
  private purchaseUrl = 'http://localhost:3000/purchased';

  RegisterUser(inputdata:any){
    return this.http.post(this.apiurl,inputdata)
  }
  GetUserbyCode(id:any){
    return this.http.get(this.apiurl+'/'+id);
  }
  Getall(){
    return this.http.get(this.apiurl);
  }
  updateuser(id:any,inputdata:any){
    return this.http.put(this.apiurl+'/'+id,inputdata);
  }
  getuserrole(){
    return this.http.get('http://localhost:3000/role');
  }
  isloggedin(){
    return sessionStorage.getItem('username')!=null;
  }
  getrole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }
  GetAllCustomer(){
    return this.http.get('http://localhost:3000/customer');
  }
  Getaccessbyrole(role:any,menu:any){
    return this.http.get('http://localhost:3000/roleaccess?role='+role+'&menu='+menu)
  }

  getPolicies(){
    return this.http.get('https://652ff7016c756603295e0287.mockapi.io/insurance-domain')
  }

  purchasedData(details:any){
    return this.http.post(this.purchaseUrl, details)
  }

  getAllPurchases(){
    return this.http.get(this.purchaseUrl)
  }

  updatePurchases(id:any, data:any){
    return this.http.put(this.purchaseUrl+'/'+id,data)
  }
}
