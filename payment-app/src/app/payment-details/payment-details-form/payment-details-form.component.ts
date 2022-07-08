import { PaymentDetailService } from './../../shared/payment-detail.service';
import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import {ToastrService} from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styleUrls: ['./payment-details-form.component.css']
})
export class PaymentDetailsFormComponent implements OnInit {

  constructor(
    public service:PaymentDetailService,
    private Toastr:ToastrService,
    private route:Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit(form:any)
  {
if(this.service.formData.paymentDetailId==0)
{
  this.insertRecord(form);
}else{
  this.updateRecord(form);
}
this.route.navigateByUrl('details');
  }
  insertRecord(form:NgForm)
  {
    console.log(form.value);
    this.service.postPaymentDetails().subscribe(
      res=>{
    console.log(res);
    this.onReset(form);
    this.Toastr.success('Submitted successfully','Payment Detail Register');
    this.service.refreshList();
    this.route.navigateByUrl('details');

      },
      err=>{
        console.log(err);

      }
    )
  }
  updateRecord(form:NgForm){
    console.log(form.value);
    this.service.putPaymentDetails().subscribe(
      res=>{
    console.log(res);
    this.onReset(form);
    this.Toastr.info('Updated successfully','Payment Detail updated');
    this.service.refreshList();
      },
      err=>{
        console.log(err);

      }
    )
  }

  onReset(form:any){
    form.reset();
    this.service.formData=new PaymentDetail();
  }
}
