import { Component, OnInit } from '@angular/core';
import { UserauthService } from 'src/app/services/userauth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userData: UserauthService) { }

  ngOnInit(): void {
    this.getAllPosts()
  }

  getAllPosts() {
    this.userData.getAllPosts().subscribe((data) => {
      console.log(data);
    })
  }

}
