import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterAuthService } from 'src/app/auth/router-auth.service';
import { Post } from 'src/app/interface/post';
import { UserauthService } from 'src/app/services/userauth.service';
import * as PostPageAction from 'src/app/poststate/postpage.action';
import * as PostAPIAction from 'src/app/poststate/postapi.action';

import {Store} from '@ngrx/store';


@Component({
  selector: 'app-creatpost',
  templateUrl: './creatpost.component.html',
  styleUrls: ['./creatpost.component.css']
})
export class CreatpostComponent implements OnInit {

  constructor(private userService: UserauthService, private authService: RouterAuthService, private router: Router, private route: ActivatedRoute, private store:Store) { }

  ngOnInit(): void {
  }

  postDetail = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl('')
  })

  submit() {
    if (this.postDetail.valid) {
      let detail : Post = {
        user: this.authService.userId,
        title: this.postDetail.value.title,
        description: this.postDetail.value.description,
        category: this.postDetail.value.category
      }
      this.store.dispatch(PostPageAction.createPost({post: detail}))
     
    } else {
      alert('Please fill all fields')
    }
  }

}
