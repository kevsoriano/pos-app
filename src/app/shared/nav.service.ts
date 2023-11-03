import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  appDrawer = new BehaviorSubject<boolean>(false);

  constructor() { }

  public toggleNav(val: boolean) {
    // this.appDrawer = !this.appDrawer;
    this.appDrawer.next(val);
  }
}
