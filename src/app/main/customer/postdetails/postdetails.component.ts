import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from 'src/app/interface/posts';
import { UserauthService } from 'src/app/services/userauth.service';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {
  post: Posts | any = {}
  id: string = ''
  constructor(private route: ActivatedRoute, private userData: UserauthService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.userData.getPost(this.id).subscribe((data: any) => {
      console.log(data);
      this.post = data.data;
    })
  } 

}
