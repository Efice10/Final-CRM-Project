import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../shared/auth.service';
// User interface
export class User {
  name!: string;
  email!: string;
  password!: string;
  password_confirmation!: string;
  company!: string;
  position!: string;
  phone!: string;
  role!: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  UserProfile!: User;
  constructor(public authService: AuthService) {
    this.authService.profileUser().subscribe((data: any) => {
      this.UserProfile = data;
    });
  }
  ngOnInit() {}
}