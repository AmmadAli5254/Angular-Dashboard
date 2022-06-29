import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UsersdataService } from 'src/app/services/usersdata.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  data: User[] = [];
  searchValue!: string
  ascDes: boolean = true


  constructor(private hs: UsersdataService) {
    this.hs.searchvalue.subscribe((value: any) => {
      this.searchValue = value
    })
  }


  ngOnInit(): void {
    this.getData();
  }


  getData() {
    this.hs.getData()
      .subscribe((data: any) => {
        this.setData(data)
      })
  }


  setData(data:any) {
    for (let i = 0; i < data.length; i++) {
      this.data.push({ id: data[i].id, name: data[i].name, website: data[i].website, phone: data[i].phone, email: data[i].email })
    }
  }

  sortArray() {
    if (this.ascDes) {
      this.data = this.data.sort((a: any, b: any) => {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
      })
      this.ascDes = false
    } else {
      this.data = this.data.sort((a: any, b: any) => {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (y < x) { return -1; }
        if (y > x) { return 1; }
        return 0;
      })
      this.ascDes = true
    }
  }
}
