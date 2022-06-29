import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterAuthService } from '../auth/router-auth.service';
import { UsersdataService } from '../services/usersdata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  value!: string
  routerService: any;
  constructor(private ds: UsersdataService, private routerAuthService: RouterAuthService) { }
  userName: string | null = ''

  ngOnInit(): void {
    this.setUserName()
  }





  setSearchValue() {
    this.ds.setSeachValue(this.value)
  }

  logOut() {
    this.routerAuthService.logOut()
  }

  setUserName() {
    this.routerAuthService.getUserData().subscribe((data: any) => {
      this.userName = data.data.name;
    })
  }
}
