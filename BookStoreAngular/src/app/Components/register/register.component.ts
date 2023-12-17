import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/UserServices/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  RegisterForm!: FormGroup;
    submitted = false;

  hide: boolean = true;

  toggleVisibility(): void {
    this.hide = !this.hide;
  }
  constructor(private formBuilder:FormBuilder, private router: Router,private userservice:UserService){}
  ngOnInit() {
    console.log("Oninit life cycle gets called");
    this.RegisterForm = this.formBuilder.group({
      Fullname: ['', [Validators.required]],
      Emailid: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  onSubmit() {
    console.log(this.RegisterForm.value);
    if (this.RegisterForm.valid) {
      let reqData = {
        fullName: this.RegisterForm.value.Fullname,
        emailId: this.RegisterForm.value.Emailid,
        mobileNumber: this.RegisterForm.value.number,
        password: this.RegisterForm.value.password,
        isAdmin:'Admin'
      }
      this.userservice.Register(reqData).subscribe((response)=>{
        console.log(response);
      });
    }
    else {
      console.log("The Value is Invalid");
      return;
    }
  }

}
