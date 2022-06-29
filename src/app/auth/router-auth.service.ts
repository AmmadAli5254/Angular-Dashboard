import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RouterAuthService implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  getUserDataURL = environment.getUserDataAPI;
  isLoggedIn: boolean = false;
  userId: string | null = '';

  ngOnInit(): void {
  }


  logIn() {
    this.isLoggedIn = true;
  }

  logOut() {
    this.isLoggedIn = false;
    this.removeTokenAndId();
    this.router.navigate(['login']);
  }

  checkLogStatus(): boolean {
    if (this.isLoggedIn) {
      return true
    }
    this.router.navigate(['login'])
    return false
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token')
  }

  removeTokenAndId() {
    localStorage.removeItem('token');
    localStorage.removeItem('id')
  }

  setuserId(id: string) {
    localStorage.setItem('id', id);
  }

  setuserIdfromLocal() {
    this.userId = localStorage.getItem('id')
  }

  getUserData() {
    return this.http.get(this.getUserDataURL + this.userId)
  }
}
