import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
list:PaymentDetail[];
  constructor(
    private http:HttpClient,
    private toastr:ToastrService
  ) { }
  readonly baseURL='http://localhost:12527/paymentDetails';
  readonly userBaseURL='http://localhost:12527/api/UserModels'
  formData:PaymentDetail=new PaymentDetail();
  postPaymentDetails(){
 return this.http.post(this.baseURL,this.formData);
  }
  putPaymentDetails(){
    return this.http.put(`${this.baseURL}/${this.formData.paymentDetailId}`,this.formData);
  }

  refreshList(){
     this.http.get(this.baseURL).toPromise()
      .then(res=>{
        this.list=res as PaymentDetail[];
        console.log(this.list);
      })
  }
  deleteRecord(id:any){
    return this.http.delete(`${this.baseURL}/${id}`);
  }
  login(data:any){
//   if(email==='a@gmail.com' && pass==='12345')
//   {
// this.toastr.info('Logged-in Successfully ','Login');
//     return true;
//   }else{
//     this.toastr.error('Wrong login credentials','Wrong Email/Password');
//     return false;
//   }

  }
  getUserDetail()
{
  return this.http.get(this.userBaseURL);
}
userDetailsByID(id:any)
{
  return this.http.get(`${this.userBaseURL}/${id}`);
}
  register(data:any){
    console.log(data);
    //return true;
    return this.http.post(this.userBaseURL,data);
  }
}
