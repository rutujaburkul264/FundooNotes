import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  ResetPassword!: FormGroup;
  submitted = false;
  token:any

  constructor(private formBuilder: FormBuilder,private userservice:UserService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.ResetPassword = this.formBuilder.group({
      NewPassword: ['', Validators.required],
      ConfirmPassword: ['', Validators.required]
    })
    this.token = this.activatedRoute.snapshot.paramMap.get('token');
    console.log(this.token);
  }
  get f() { return this.ResetPassword.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.ResetPassword.valid) {
      let data={
        newPassword: this.ResetPassword.value.NewPassword
      }
      this.userservice.forgetpassword(data,this.token).subscribe((response:any)=>{
        console.log(response)
      })
    }
    else{
      console.log("Form is invalid")
    }
  }
}
