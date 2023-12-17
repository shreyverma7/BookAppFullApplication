import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/UserServices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  Id: any = {};

  hide: boolean = true;

  toggleVisibility(): void {
    this.hide = !this.hide;
  }
  constructor(private formBuilder:FormBuilder, private router: Router,private userServices:UserService){}

  ngOnInit() {
    console.log("Oninit life cycle gets called");
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  onSubmit() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      let reqData = {
        EmailId: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      this.userServices.loginservice(reqData).subscribe((response) => {
        console.log(response);
        this.Id = response;
        localStorage.setItem('Token',this.Id.data);
        console.log(this.Id.data);
        this.router.navigate(['dashboard/books'])
    });
  }
    else {
      console.log("The Value is Invalid");
      return;
    }
  }
}
