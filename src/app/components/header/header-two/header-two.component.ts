import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../../../_services/token-storage.service';
@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.css']
})
export class HeaderTwoComponent implements OnInit {

  roles: string[];
  isLoggedIn = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;


      this.username = user.email;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
