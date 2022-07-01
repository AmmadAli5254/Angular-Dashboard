import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { UsersComponent } from './main/users/users.component';
import { CustomerComponent } from './main/customer/customer.component';
import { AccountComponent } from './main/account/account.component';
import { ProductsComponent } from './main/products/products.component';
import { ContactusComponent } from './main/contactus/contactus.component';
import { AboutusComponent } from './main/aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FilterPipe } from './pipes/filter.pipe';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TokenInterceptor } from './services/token.interceptor';
import { PostdetailsComponent } from './main/customer/postdetails/postdetails.component';
import { CreatpostComponent } from './main/customer/creatpost/creatpost.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducer } from './poststate/post.reducer';
import { PostApiEffectsService } from './poststate/post-api-effects.service';
import { CreateuserComponent } from './main/account/createuser/createuser.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    DashboardComponent,
    UsersComponent,
    CustomerComponent,
    AccountComponent,
    ProductsComponent,
    ContactusComponent,
    AboutusComponent,
    LoginComponent,
    SignupComponent,
    FilterPipe,
    PagenotfoundComponent,
    PostdetailsComponent,
    CreatpostComponent,
    CreateuserComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ post: reducer }),
    EffectsModule.forRoot([PostApiEffectsService]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
