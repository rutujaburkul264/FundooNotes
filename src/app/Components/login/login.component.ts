import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private userservice:UserService) { }

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })
  }
  get f() { return this.LoginForm.controls; }

  onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.LoginForm.valid) {
    let requestData={
    email: this.LoginForm.value.email,
    password: this.LoginForm.value.password

    }
    this.userservice.login(requestData).subscribe((response:any)=>{
      localStorage.setItem("token",response.id)
      console.log(response)
    })
  }
  else{
    console.log("form is invalid")
  }
}
}
