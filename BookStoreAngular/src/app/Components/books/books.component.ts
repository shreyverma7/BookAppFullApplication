import { Component } from '@angular/core';
import { DataService } from 'src/app/Services/DataServices/data.service';
import { UserService } from 'src/app/Services/UserServices/user.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  booklist: any
  booklistarray?: any = [];
  dialog: any;
  searchtext: any
  BookId:any

  constructor(private userService: UserService,private dataservice: DataService) { }
  ngOnInit(): void {
    this.getAllNotes();
    this.dataservice.receiveData.subscribe((res:any)=>{
      console.log(res);
      this.searchtext = res;  
    })
  }
  getAllNotes() {
    this.userService.GetBooks().subscribe((result) => {
      console.log(result);
      this.booklist = result;
      this.booklistarray = this.booklist.data;
      console.log(this.booklist.data)
    })
  }
  boo(bookid: number):void
  {
    this.BookId = bookid
    console.log("book id"+bookid);
    localStorage.setItem('bookid',this.BookId);
  }
}
