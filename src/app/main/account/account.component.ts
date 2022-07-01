import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Posts } from 'src/app/interface/posts';
import { AppState, selectAllPostsSelectore } from 'src/app/poststate/post.reducer';
import { UserauthService } from 'src/app/services/userauth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {


  

  users!: Observable<Posts[]> 

  constructor(private userData: UserauthService) {

  }

  ngOnInit(): void {
   
  }


}
