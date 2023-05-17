import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { TokenService } from './shared/token.service';
import { AuthStateService } from './shared/auth-state.service';
import { AuthService, User } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Customer Relationship Management';

  isSignedIn!: boolean;
  userRole!: string;
  company!: string;
  UserProfile!: User;

  constructor(
    private auth: AuthStateService,
    private router: Router,
    private token: TokenService,
    public authService: AuthService
  ) {
    this.authService.profileUser().subscribe((data: any) => {
      this.UserProfile = data;
    });
  }

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
    this.router.navigateByUrl('/login');
    
  }

  navigateToArticles() {
    if (this.userRole === 'admin') {
      this.router.navigate(['/articles']);
    } else {
      this.router.navigate(['/userarticles']);
    }
  }
}
