import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from '../interface/login';
import { Signup } from '../interface/signup';

@Injectable({
  providedIn: 'root'
})
export class UserauthService {
  //Signup & Login URL
  signupURL = environment.signupAPI;
  loginURL = environment.loginAPI;
  getAllPostURL = environment.getAllPostAPI;
  getPostURL = environment.getPostAPI;
  createPostURL = environment.createPost

  constructor(private http: HttpClient) { }

  signUp(detail: Signup) {
    return this.http.post(this.signupURL, detail)
  }

  login(detail: Login) {
    return this.http.post(this.loginURL, detail)
  }

  getAllPosts() {
    return this.http.get(this.getAllPostURL)
  }

  getPost(id: any) {
    return this.http.get(this.getPostURL + id)
  }

  createPost(detail: any) {
    return this.http.post(this.createPostURL, detail)
  }
}

