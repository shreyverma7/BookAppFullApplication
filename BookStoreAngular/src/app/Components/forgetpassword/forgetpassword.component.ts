import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/UserServices/user.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  forgetForm!: FormGroup;
  submitted = false;

    constructor(private formBuilder:FormBuilder, private router: Router,private userservice:UserService){}

    ngOnInit() {
      console.log("Oninit life cycle gets called");
      this.forgetForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
      });
    }
    onSubmit() {
      console.log(this.forgetForm.value);
      if (this.forgetForm.valid) {
        let reqData = {
          email: this.forgetForm.value.email,
        }
        this.userservice.ForgotPassword(reqData).subscribe((response)=>{
          console.log(response);
        });
      }
      else {
        console.log("The Value is Invalid");
        return;
      }
    }
}
