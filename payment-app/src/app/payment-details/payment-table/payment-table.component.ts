import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-table',
  templateUrl: './payment-table.component.html',
  styleUrls: ['./payment-table.component.css']
})
export class PaymentTableComponent implements OnInit {

  constructor(
    public service: PaymentDetailService,
    private Toastr: ToastrService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.service.refreshList();
    //console.log(this.service.list);
  }
  populateForm(selectedRecord: PaymentDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
    this.route.navigateByUrl('entry');
  }
  onDelete(id: number) {
    this.service.deleteRecord(id).subscribe(
      res => {
        this.service.refreshList();
        this.Toastr.error('Deleted Successfully', 'Record Deleted');
      },
      err => {
        console.log(err);

      }
    )
  }
}
