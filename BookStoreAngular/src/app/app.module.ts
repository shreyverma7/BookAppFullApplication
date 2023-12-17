import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgetpasswordComponent } from './Components/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { MainComponent } from './Components/main/main.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { BooksComponent } from './Components/books/books.component';
import { SearchPipe } from './Pipes/Search/search.pipe';
import { BookviewComponent } from './Components/bookview/bookview.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { MatRadioModule } from '@angular/material/radio';
import { CartComponent } from './Components/cart/cart.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { OrdersummaryComponent } from './Components/ordersummary/ordersummary.component';
import { OrderComponent } from './Components/order/order.component';


const routes: Routes = [
  {path:'resetpassword',component:ResetpasswordComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'dashboard',component:DashboardComponent,
   children:[
    {path:'books',component:BooksComponent},
    {path:'bookview',component:BookviewComponent},
    {path:'profile',component:ProfileComponent},
    {path:'cart',component:CartComponent},
    {path:'wish',component:WishlistComponent},
    {path:'summary',component:OrdersummaryComponent},
    {path:'order',component:OrderComponent}
   ]
},
  {path:'home',component:MainComponent,
   children:[
    {path:'signup',component:RegisterComponent},
    {path:'Log',component:LoginComponent}
   ]}
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent,
    MainComponent,
    DashboardComponent,
    BooksComponent,
    SearchPipe,
    BookviewComponent,
    ProfileComponent,
    CartComponent,
    WishlistComponent,
    OrdersummaryComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule, MatIconModule, MatInputModule, MatCheckboxModule, MatButtonModule, MatToolbarModule,
    FormsModule, ReactiveFormsModule, RouterModule, RouterModule.forRoot(routes), HttpClientModule, MatSidenavModule,
    MatListModule, MatIconModule, MatSnackBarModule, MatMenuModule, MatGridListModule,MatRadioModule,
    MatStepperModule,MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
