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
    return this.http.post('http://localhost:3000/user',inputdata)
  }
  GetUserbyCode(id:any){
    return this.http.get('http://localhost:3000/user'+'/'+id);
  }
  Getall(){
    return this.http.get('http://localhost:3000/user');
  }
  updateuser(id:any,inputdata:any){
    return this.http.put('http://localhost:3000/user'+'/'+id,inputdata);
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
  Getaccessbyrole(role:any,menu:any){
    return this.http.get('http://localhost:3000/roleaccess?role='+role+'&menu='+menu)
  }

  getPolicies(){
    return this.http.get('http://localhost:3000/policies')

  }

  purchasedData(details:any){
    return this.http.post('http://localhost:3000/purchased', details)
  }

  getAllPurchases(){
    return this.http.get('http://localhost:3000/purchased')
  }

  updatePurchases(id:any, data:any){
    return this.http.put('http://localhost:3000/purchased'+'/'+id,data)
  }

  searchPolicy(query: any){
    return this.http.get(`http://localhost:3000/policies?q=${query}`)
  }
}
