import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-forget-email',
  templateUrl: './forget-email.component.html',
  styleUrls: ['./forget-email.component.scss']
})
export class ForgetEmailComponent implements OnInit {
  ForgotEmail!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private userservice:UserService) { }

  ngOnInit(): void {
    this.ForgotEmail = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }
  get f() { return this.ForgotEmail.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.ForgotEmail.valid) {
      let data={
        email: this.ForgotEmail.value.email
      }
      this.userservice.forgetEmail(data).subscribe((response:any)=>{
        console.log(response)
      })
    }
    else{
      console.log("form is invalid")
    }
  }
}
