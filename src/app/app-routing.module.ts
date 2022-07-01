import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './main/aboutus/aboutus.component';
import { AccountComponent } from './main/account/account.component';
import { ContactusComponent } from './main/contactus/contactus.component';
import { CustomerComponent } from './main/customer/customer.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { ProductsComponent } from './main/products/products.component';
import { MainComponent } from './main/main.component';
import { UsersComponent } from './main/users/users.component';
import { SignupComponent } from './signup/signup.component';
import { RouterGuard } from './auth/router.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostdetailsComponent } from './main/customer/postdetails/postdetails.component';
import { CreatpostComponent } from './main/customer/creatpost/creatpost.component';
import { CreateuserComponent } from './main/account/createuser/createuser.component';

const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'main', component: MainComponent, canActivate: [RouterGuard], children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'customer', component: CustomerComponent
      },
      { path: 'users', component: UsersComponent },
      { path: 'account', component: AccountComponent },
      { path: 'product', component: ProductsComponent },
      { path: 'contactus', component: ContactusComponent },
      { path: 'aboutus', component: AboutusComponent },
      { path: 'post/:id', component: PostdetailsComponent },
      { path: 'createpost', component: CreatpostComponent },
      { path: 'createuser', component: CreateuserComponent }
    ]

  },
  
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
