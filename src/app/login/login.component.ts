import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterAuthService } from '../auth/router-auth.service';
import { Login } from '../interface/login';
import { UserauthService } from '../services/userauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice: UserauthService, private route: Router, private routerService: RouterAuthService) { }

  ngOnInit(): void {

  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })


  logIn() {
    let detail: Login = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    }
    this.authservice.login(detail).subscribe((data: any) => {
      this.routerService.logIn();
      this.routerService.setToken(data.token);
      this.routerService.setuserId(data.id);
      this.routerService.setuserIdfromLocal();
      alert('Login sucessfully')
      this.route.navigate(['/main'])
    }, (err) => {
      alert('Unauthorized Access')
      console.log(err);
    })
  }


}
