import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  UserProfile!: User;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.authService.profileUser().subscribe((data: any) => {
      this.UserProfile = data;
    });
  }

  updateProfile() {
    this.authService.updateProfile(this.UserProfile).subscribe((data: any) => {  
      this.UserProfile = data;
      this.router.navigateByUrl('/profile');
      // Handle success or error response
    });
  }
}
