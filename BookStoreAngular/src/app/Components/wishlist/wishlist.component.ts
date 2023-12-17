import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/UserServices/user.service';
import { DataService } from 'src/app/Services/DataServices/data.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  wishlist: any
  wishlistarray?: any=[];
  searchtext: any
  constructor(private userservice:UserService, private router: Router,private dataservice: DataService){}

  ngOnInit(): void{
  this.userservice.GetAllWishist().subscribe((response)=>{
    console.log(response)
    this.wishlist=response;
    this.wishlistarray=this.wishlist.data;
    console.log(this.wishlist.data);
    this.dataservice.receiveData.subscribe((res:any)=>{
      console.log(res);
      this.searchtext = res;
    })
  });
  }
  Remove(bookid: any): void{
    this.userservice.RemoveBookFromWishlist(bookid).subscribe((Response)=>{
      console.log(Response);
     window.location.reload();
    })
  }
  MoveToCart(bookid: any){
    this.userservice.MoveBookToCart(bookid).subscribe((response)=>{
      console.log(Response);
      this.router.navigate(['dashboard/cart']);
    })
  }
}
