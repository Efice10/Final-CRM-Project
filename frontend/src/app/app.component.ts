import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { TokenService } from './shared/token.service';
import { AuthStateService } from './shared/auth-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Customer Relationship Management';

  isSignedIn!: boolean;
  userRole!: string;

  constructor(
    private auth: AuthStateService,
    private router: Router,
    private token: TokenService
  ) {}

  ngOnInit() {
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });
    this.auth.getUserRole().subscribe((val) => {
      this.userRole = val;
    });
  }

  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
  }

  navigateToArticles() {
    if (this.userRole === 'admin') {
      this.router.navigate(['/articles']);
    } else {
      this.router.navigate(['/userarticles']);
    }
  }
}
