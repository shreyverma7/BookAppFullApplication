import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/UserServices/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  ResetForm!: FormGroup;
  submitted = false;

  hide: boolean = true;

  toggleVisibility(): void {
    this.hide = !this.hide;
  }
  constructor(private fromBuilder:FormBuilder, private router:Router,private userservice:UserService){}
  ngOnInit() {
    console.log("Oninit life cycle gets called");
    this.ResetForm = this.fromBuilder.group({
      passwordnew: ['', [Validators.required, Validators.minLength(8)]],
      passwordconfirm: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  onSubmit() {
    console.log(this.ResetForm.value);
    var token = localStorage.getItem('Token');
    if (this.ResetForm.valid) {
      let reqData = {
        newpassword: this.ResetForm.value.passwordnew,
        confirmpassword: this.ResetForm.value.passwordconfirm
      }
      this.userservice.Resetpassword(token,reqData).subscribe((response)=>{
        console.log(response);
      });
    }
    else {
      console.log("The Value is Invalid");
      return;
    }
  }
}
