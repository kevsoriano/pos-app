import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { NavService } from '../shared/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isAuthenticated = false;
  private appDrawerSub: Subscription;
  isAppDrawerOpen = true;

  constructor(private authService: AuthService, private navService: NavService) {

  }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
    this.appDrawerSub = this.navService.appDrawer.subscribe(appDrawer => {
      this.isAppDrawerOpen = appDrawer;
    })
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  toggleNav() {
    this.navService.toggleNav(!this.isAppDrawerOpen);
  }
}
