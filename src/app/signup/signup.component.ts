import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Signup } from '../interface/signup';
import { UserauthService } from '../services/userauth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authservice: UserauthService, private route: Router) { }

  ngOnInit(): void {
  }

  //Creating a Reactive Form

  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  //Signup Method

  signUp() {
    let detail: Signup = {
      name: this.signupForm.get('name')?.value,
      email: this.signupForm.get('email')?.value,
      password: this.signupForm.get('password')?.value,
    }
    this.authservice.signUp(detail).subscribe((data) => {
      alert('New User created sucessfully')
      this.route.navigate(['login'])
    },
      (err) => {
        if (err.error.message == 'user already registered') {
          alert(err.error.message);
          console.log('hhh');

          this.route.navigate(['login'])

        } else {
          console.log();

          alert(err.error.message);
        }

      })

  }


}
