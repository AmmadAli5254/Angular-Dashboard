import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Post } from 'src/app/interface/post';
import { UserAccount } from 'src/app/interface/user-account';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  @ViewChild('imgTag') imgTag!: ElementRef;
  @ViewChild('imgInput') imgInput!: ElementRef;

  imgUrl!: string;


  ngOnInit(): void {

  }

  onSelectImg(event: any) {
    if (event.target.files) {
      this.imgInput.nativeElement.style.display = "none";
      this.imgTag.nativeElement.style.display = "block";
      let reader = new FileReader();
      console.log('redad', reader.readAsDataURL(event.target.files[0]));
      reader.onload = (event: any) => {
        this.imgUrl = event.target.result;
      }
    }
  }


  userDetail = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    image: new FormControl(''),
    status: new FormControl(''),
  })

  submit() {
    if (this.userDetail.valid) {
      let detail: UserAccount = {
        name: this.userDetail.value.name,
        email: this.userDetail.value.email,
        password: this.userDetail.value.password,
        image: this.imgUrl,
        status: this.userDetail.value.status,
      }
      console.log(detail);


    } else {
      alert('Please fill all fields')
    }
  }

}
