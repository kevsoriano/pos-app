import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { NavService } from '../shared/nav.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isAuthenticated = false;
  private appDrawerSub: Subscription;
  isAppDrawerOpen = true;

  constructor(private authService: AuthService, private navService: NavService) {}

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
}
