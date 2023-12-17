import { Injectable } from '@angular/core';
import { HttpService } from '../HttpServices/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpService: HttpService) { }

  loginservice(reqData: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('Token')
      }),
    };
    return this.httpService.postService('User/Login?email='+reqData.EmailId+'&password='+reqData.password, reqData, false, httpAuthOptions);
  };

  ForgotPassword(reqData: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('Token')
      }),
    };
    return this.httpService.postService(
      'User/ForgetPassword?email=' + reqData.email,
      {},
      false,
      httpAuthOptions
    );
  }
  Register(reqData: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('Token')
      }),
    };
    return this.httpService.postService(
      'User/Registration',
      reqData,
      false,
      httpAuthOptions
    );
  }

  Resetpassword(auth: any, reqData: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + auth,
      }),
    };
    return this.httpService.updateService(
      'User/ResetPassword',
      reqData,
      true,
      httpAuthOptions
    );
  }
  GetBooks() {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('Token')
      }),
    };
    return this.httpService.getservices(
      'Book/GetAllBooks',
      true,
      httpAuthOptions
    );
  }

  GetAllWishist() {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('Token')
      }),
    };
    return this.httpService.getservices(
      'Wishlist/GetAllWishList',
      true,
      httpAuthOptions
    );
  }
  RemoveBookFromWishlist(bookid: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('Token')
      }),
    };
    return this.httpService.deleteService(
      'Wishlist/DeleteWishlist?BookId=' + bookid,
      true,
      httpAuthOptions
    );
  }
  GetAllPersonalDetails() {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('Token')
      }),
    };
    return this.httpService.getservices(
      'CustomerDetail/GetAllCustomerDetails',
      true,
      httpAuthOptions
    );
  }

  GetAllCart() {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('Token')
      }),
    };
    return this.httpService.getservices(
      'Cart/GetAllCart',
      true,
      httpAuthOptions
    );
  }
  RemoveBookFromCart(bookid: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('Token')
      }),
    };
    return this.httpService.deleteService(
      'Cart/DeletefromCart?BookId=' + bookid,
      true,
      httpAuthOptions
    );
  }
  AddBookToWishlist(reqdata: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('Token'),
      }),
    };
    return this.httpService.postService(
      'Wishlist/AddWishlist',
      reqdata,
      true,
      httpAuthOptions
    );
  }

  AddBookTocart(reqData: any){
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('Token'),
      }),
    };
    return this.httpService.postService(
      'Cart/AddtoCart',
      reqData,
      true,
      httpAuthOptions
    );
  }


  //-----------------------------
  GetById(bookid: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('Token')
      }),
    };
    return this.httpService.getservices(
      'Book/GetBookById?BookId=' + bookid,
      true,
      httpAuthOptions
    );
  }

  //intregrated addfeedback
  AddFeedback(reqData: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('Token'),
      }),
    };
    return this.httpService.postService(
      'Feedback/AddFeedback',
      reqData,
      true,
      httpAuthOptions
    );
  }
  GetFeedack(bookid: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('Token')
      }),
    };
    return this.httpService.getservices(
      'Feedback/GetAllFeedback?bookid=' + bookid,
      true,
      httpAuthOptions
    );
  }



  MoveBookToCart(bookid: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('Token'),
      }),
    };
    return this.httpService.updateService(
      'WishList/AddBooksFromWishlistFromCart?bookid='+bookid,
      {},
      true,
      httpAuthOptions
    );
  }

 //personal details

  AddPersonalDetails(reqData: any){
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('Token'),
      }),
    };
    return this.httpService.postService(
      'CustomerDetail/AddCustomerDetails',
      reqData,
      true,
      httpAuthOptions
    );
  }
  UpdatePersonalDetails(reqData: any){
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('Token'),
      }),
    };
    return this.httpService.updateService(
      'CustomerDetail/UpdateCustomerDetails',
      reqData,
      true,
      httpAuthOptions
    );
  }
  Orderdetails(reqData: any){
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('Token'),
      }),
    };
    return this.httpService.postService(
      'OrderPlaced/PlaceOrder?CartId='+reqData.CartId+'&CustomerId='+reqData.customerid,
      reqData,
      true,
      httpAuthOptions
    );
  }

}
