import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interface/customer';
import { UserauthService } from 'src/app/services/userauth.service';
import { UsersdataService } from 'src/app/services/usersdata.service';
import { Store } from '@ngrx/store'
import * as PostPageAction from 'src/app/poststate/postpage.action';
import * as PostAPIAction from 'src/app/poststate/postapi.action';
import { Observable } from 'rxjs';
import { Posts } from 'src/app/interface/posts';
import { AppState, selectAllPosts, selectAllPostsSelectore } from 'src/app/poststate/post.reducer';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  posts:Observable<Posts[]>

  constructor(private userData: UserauthService, private store: Store<AppState>){
    this.posts = this.store.select(selectAllPostsSelectore);
  
  }

  ngOnInit(): void {
    this.store.dispatch(PostPageAction.enter())
  }

}






