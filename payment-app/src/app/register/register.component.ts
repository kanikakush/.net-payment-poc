import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;

    constructor(
      private service:PaymentDetailService,
      private route:Router,
      private fb:FormBuilder,
      private toastr:ToastrService
    ) { }

    ngOnInit(): void {
      this.registerForm = this.fb.group({
        UserName:['',Validators.required],
        age:['',Validators.required],
        UserEmail:['',[Validators.required,Validators.email]],
        UserPassword: ['',Validators.required]
      });
    }

  onSubmit(){
   // console.log(this.registerForm.value);
    const payload={
      "userName": this.registerForm.value.UserName,
      "userEmail": this.registerForm.value.UserEmail,
      "userPassword": this.registerForm.value.UserPassword,
      "age": this.registerForm.value.age
    }
    this.service.register(payload).subscribe((res)=>
    {
      //console.log('successuff');
      //console.log(res);

      this.route.navigateByUrl('');
      this.toastr.success('Please login','Successfully Registered');
    },
    err=>{
      console.log(err);
      this.toastr.error('Register failed','Failed');
    })
  }
}
