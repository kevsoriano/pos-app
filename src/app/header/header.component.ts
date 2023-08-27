import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  open = false;
  private userSub: Subscription;
  isAuthenticated = false;

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  // onLogout() {
  //   this.authService.logout();
  // }
}
