import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatExpansionPanel } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/UserServices/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  @ViewChild('fullnameInput') fullnameInput!: ElementRef;
  @ViewChild('mobile') mobile!: ElementRef;
  @ViewChild('address') address!: ElementRef;
  @ViewChild('city') city!: ElementRef;
  @ViewChild('state') state!: ElementRef;
  @ViewChild('homeRadio') homeRadio!: ElementRef<HTMLInputElement>;
  @ViewChild('workRadio') workRadio!: ElementRef<HTMLInputElement>;
  @ViewChild('othersRadio') othersRadio!: ElementRef<HTMLInputElement>;

  panelOpenState = false;
  numberOfBooks: number = 1;
  selectedGender: string | undefined;
  currentUrl: string;
  customerId: any;
  customer: any

  increment() {
    this.numberOfBooks++;
  }

  decrement() {
    if (this.numberOfBooks > 1) {
      this.numberOfBooks--;
    }
  }

  cartlist: any
  cartlistarray?: any = []
  personal: any
  personalarray?: any = []
  showOtherDetails: boolean = false;
  selectedBook: any = {
    fullname: 'Shrey kumar verma',
    mobilenum: '8754388740'
  };

  constructor(private userservice: UserService, private router: Router) {
    this.currentUrl = this.router.url;
  }


  ngOnInit(): void {
    this.userservice.GetAllCart().subscribe((response) => {
      console.log(response)
      this.cartlist = response;
      this.cartlistarray = this.cartlist.data;
      console.log(this.cartlist.data);
    });
    this.userservice.GetAllPersonalDetails().subscribe((response) => {
      console.log(response);
      this.personal = response;
      this.personalarray = this.personal.data;
      console.log(this.personal.data)
    });
  }
  remove(bookid: any) {
    this.userservice.RemoveBookFromCart(bookid).subscribe((response) => {
      console.log(response);
      window.location.reload();
    })
  }
  openCustomerPanel(panel: MatExpansionPanel) {
    // Open the second panel
    panel.open();
  }
  openOrderPanel(panel: MatExpansionPanel) {
    // Open the second panel
    panel.open();
  }
  isEditMode: { [key: string]: boolean } = {};

  toggleEditMode(customerid: any) {
    this.isEditMode[customerid] = !this.isEditMode[customerid];
  }


  selectedItem: string | null = null;

  toggleOtherDetailsVisibility(customerId: string, fullname: string, mobilenum: string) {
    localStorage.setItem('customerid', customerId);
    if (this.selectedItem === customerId) {
      this.selectedItem = customerId;
      this.selectedBook = null;
    } else {
      this.selectedItem = customerId;
      this.selectedBook = { fullname, mobilenum };
    }
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
  // onSave(id: any) {
    onSave() {
    let reqData = {
      fullName: this.fullnameInput.nativeElement.value,
      mobileNumber: this.mobile.nativeElement.value,
      address: this.address.nativeElement.value,
      state: this.state.nativeElement.value,
      cityOrTown: this.city.nativeElement.value,
      typeId: 1

      // typeId: id
      // Retrieve values of other input fields in a similar manner
    }
    console.log(reqData);
    this.userservice.UpdatePersonalDetails(reqData).subscribe((response) => {
      console.log(response)
    })
  }
  Oncheckout() {
    this.customer=localStorage.getItem('customerid');
    let reqData = {
      customerId: +this.customer

    }
    this.userservice.Orderdetails(reqData).subscribe((response)=>{
      console.log(response);
      this.router.navigate(['dashboard/summary'])
    })
  }
}
