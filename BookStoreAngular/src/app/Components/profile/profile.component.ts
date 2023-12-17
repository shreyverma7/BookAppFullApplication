import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgModel } from '@angular/forms';
import { UserService } from 'src/app/Services/UserServices/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @ViewChild('fullnameInput') fullnameInput!: ElementRef;
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('mobile') mobile!: ElementRef;
  @ViewChild('address') address!: ElementRef;
  @ViewChild('city') city!: ElementRef;
  @ViewChild('state') state!: ElementRef;
  @ViewChild('homeRadio') homeRadio!: ElementRef<HTMLInputElement>;
  @ViewChild('workRadio') workRadio!: ElementRef<HTMLInputElement>;
  @ViewChild('othersRadio') othersRadio!: ElementRef<HTMLInputElement>;

  personal: any
  personalarray?: any = [];
  PersonalForm!: FormGroup
  isDisabled: boolean = true;

  constructor(private userservice: UserService) { }
  selectedGender: string | undefined;

  isEditMode: boolean = false;
  inputValues: any = {};

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;



  }
  addNewAddress() {
    this.toggleEditMode();
    this.clearFields();

  }
  clearFields() {
    const indexOfFirstItem = 0; // Assuming the first item
    if (this.personalarray.length > indexOfFirstItem) {
      this.personalarray[indexOfFirstItem].fullName = null;
      this.personalarray[indexOfFirstItem].mobileNumber = null;
      this.personalarray[indexOfFirstItem].address = null;
      this.personalarray[indexOfFirstItem].cityOrTown = null;
      this.personalarray[indexOfFirstItem].state = null;
      this.personalarray[indexOfFirstItem].types.typeName = null;
    }
  }

  ngOnInit() {
    this.userservice.GetAllPersonalDetails().subscribe((response) => {
      console.log(response);
      this.personal = response;
      this.personalarray = this.personal.data;
      console.log(this.personal.data)
    });
  }
  type(): string {
    let selectedValue = '';
    if (this.homeRadio.nativeElement.checked) {
      selectedValue = this.homeRadio.nativeElement.value;
      return selectedValue
    } else if (this.workRadio.nativeElement.checked) {
      selectedValue = this.workRadio.nativeElement.value;
      return selectedValue
    } else if (this.othersRadio.nativeElement.checked) {
      selectedValue = this.othersRadio.nativeElement.value;
      return selectedValue
    } return selectedValue
  }
  onSave() {
    this.clearFields();
    let reqData = {
      fullName: this.fullnameInput.nativeElement.value,
     // emailid: this.emailInput.nativeElement.value,
    //  mobileNumber: this.mobile.nativeElement.value,
      mobileNumber: this.mobile.nativeElement.value,
      address: this.address.nativeElement.value,
      state: this.state.nativeElement.value,
      cityOrTown: this.city.nativeElement.value,
      typeId: 1

      // typeId: +this.type()
      // Retrieve values of other input fields in a similar manner
    }
    console.log(reqData);

    this.userservice.AddPersonalDetails(reqData).subscribe((response)=>{
      console.log(response)
    })
  }
}
