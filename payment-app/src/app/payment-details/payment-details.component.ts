import { PaymentDetailService } from './../shared/payment-detail.service';
//import { PaymentDetail } from './../shared/payment-detail.model';
import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from '../shared/payment-detail.model';
import {ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  constructor(
    public service:PaymentDetailService,
    private Toastr:ToastrService,
    private route:Router
  ) { }

  ngOnInit(): void {
   this.service.refreshList();
   //console.log(this.service.list);
  }
  redirectToHome(){
    this.route.navigateByUrl('details');
  }
  redirectToentry(){
    this.route.navigateByUrl('entry');
  }
  populateForm(selectedRecord:PaymentDetail)
  {
this.service.formData=Object.assign({},selectedRecord);
  }
  onDelete(id:number)
  {
this.service.deleteRecord(id).subscribe(
  res=>{
this.service.refreshList();
this.Toastr.error('Deleted Successfully','Record Deleted');
  },
  err=>{
    console.log(err);

  }
)
  }
}
