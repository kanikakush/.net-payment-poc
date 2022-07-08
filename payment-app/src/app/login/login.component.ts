import { PaymentDetailService } from './../shared/payment-detail.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  contactForm: FormGroup;
  email: any;
  password: any;
  userList: any = [];

  constructor(
    private service: PaymentDetailService,
    private route: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
   // this.getUserList();
  }

  onSubmit() {
    const payload = {
      "email": this.contactForm.value.email,
      "password": this.contactForm.value.password
    }
    this.getUserList();
    //console.log(this.contactForm.value);

    //this.service.login()
  }
  getUserList() {
    this.service.getUserDetail().subscribe(res => {
      this.userList = res;
      console.log(this.userList);
      this.userList.forEach((it:any)=>{
        if(it.userEmail===this.contactForm.value.email && it.userPassword===this.contactForm.value.password)
        {
          console.log('matchedd');
          this.route.navigateByUrl('details');
        }else{
          console.log('not matched');
        }
      })
    },
      err => {
        console.log(err);
      }
    )
  }
}
