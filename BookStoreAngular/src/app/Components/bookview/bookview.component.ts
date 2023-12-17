import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/DataServices/data.service';
import { UserService } from 'src/app/Services/UserServices/user.service';
@Component({
  selector: 'app-bookview',
  templateUrl: './bookview.component.html',
  styleUrls: ['./bookview.component.scss']
})
export class BookviewComponent implements OnInit {
  stars: boolean[] = Array(5).fill(false);
  stars1: boolean[] = Array(5).fill(false);
  wish: boolean = false;
  BookId = localStorage.getItem('bookid')
  booklist: any
  booklistarray?: any = [];
  FeedBack: any
  Feedbackarray?: any = [];
  FeedbackForm!: FormGroup;
  Rating: any
  Bookid: any
  searchtext: any

  rateBook(rating: number): void {
    this.stars = this.stars.map((_, index) => index < rating);
    this.Rating = rating
  }
  getStarsFromRating(rating: number): boolean[] {
    const starsArray: boolean[] = Array(5).fill(false);

    for (let i = 0; i < rating; i++) {
      starsArray[i] = true;
    }

    return starsArray;
  }
  constructor(private Userservice: UserService, private formBuilder: FormBuilder, private _snackbar: MatSnackBar, private router: Router,private dataservice: DataService) { }

  ngOnInit(): void {
    this.Userservice.GetById(this.BookId).subscribe((res) => {
      console.log(res);
      this.booklist = res;
      this.booklistarray = this.booklist.data;
    })
    this.Userservice.GetFeedack(this.BookId).subscribe((response) => {
      console.log(response);
      this.FeedBack = response;
      this.Feedbackarray = this.FeedBack.data;
      console.log(this.FeedBack.data)
    })
    this.FeedbackForm = this.formBuilder.group({
      feedback: ['', [Validators.required]],
    });
    this.dataservice.receiveData.subscribe((res:any)=>{
      console.log(res);
      this.searchtext = res;
    });
  }
  onSubmit() {
    this.Bookid = localStorage.getItem('bookid');
    let reqData = {
      customerDescription: this.FeedbackForm.value.feedback,
      rating: this.Rating,
      bookId: +this.Bookid
    };
    console.log(reqData);
    this.Userservice.AddFeedback(reqData).subscribe((Response) => {
      console.log(Response);
      this._snackbar.open('Feedback Added Successfully', '', {
        duration: 2000
      });
      window.location.reload();
    })
  }

  //not in use
  Feedback() {
    this.Bookid = localStorage.getItem('bookid');
    let reqdata = {
      BookId: +this.Bookid
    };
    console.log(reqdata)
    this.Userservice.AddBookToWishlist(reqdata).subscribe((response) => {
      console.log(response);
        this.wish = true;
        this._snackbar.open('Book Added to wishlist Successfully', '', {
          duration: 2000
        });
        this.router.navigate(['dashboard/wish'])
    },
    (error)=>{
      this._snackbar.open('Book Already in the Wishlist');
    }
  );
  }

  wishlist() {
    this.Bookid = localStorage.getItem('bookid');
    let reqdata = {
      BookId: +this.Bookid
    };
    console.log(reqdata)
    this.Userservice.AddBookToWishlist(reqdata).subscribe((response) => {
      console.log(response);
        this.wish = true;
        this._snackbar.open('Book Added to wishlist Successfully', '', {
          duration: 2000
        });
        this.router.navigate(['dashboard/wish'])
    },
    (error)=>{
      this._snackbar.open('Book Already in the Wishlist');
    }
  );
  }

  AddToCart() {
    this.Bookid = localStorage.getItem('bookid');
    let reqdata = {
      BookId: +this.Bookid,
      BookCountOrder: 1
    };
    console.log(reqdata)
    this.Userservice.AddBookTocart(reqdata).subscribe((response) => {
      console.log(response);
        this.wish = true;
        this._snackbar.open('Book Added to Cart Successfully', '', {
          duration: 2000
        });
        this.router.navigate(['dashboard/cart'])
    },
    (error)=>{
      this._snackbar.open('Book Already in the Cart');
    }
  );
}
}
