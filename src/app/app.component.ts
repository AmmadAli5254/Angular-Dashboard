import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterAuthService } from './auth/router-auth.service';
import { UserauthService } from './services/userauth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authservice: UserauthService, private route: Router, private routerService: RouterAuthService) { }

  ngOnInit(): void {
    this.checkLogin();
  }


  checkLogin() {
    if (this.routerService.getToken() != undefined) {
      this.routerService.setuserIdfromLocal()
      this.routerService.logIn();
      // this.route.navigate(['main'])
    }
  }
}
