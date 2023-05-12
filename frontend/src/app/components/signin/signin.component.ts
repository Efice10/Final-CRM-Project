import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../shared/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TokenService } from '../../shared/token.service';
import { AuthStateService } from '../../shared/auth-state.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  isSignedIn!: boolean;
  isAdmin!: boolean;
  errors:any = null;
  constructor(
    private router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService,
    private auth: AuthStateService,
  ) {
    this.loginForm = this.fb.group({
      email: [],
      password: [],
    });
  }
  ngOnInit() {
    this.authState.getUserRole().subscribe((role: string) => {
      this.isAdmin = role === 'admin';
    });
  }

  onSubmit() {
    this.authService.signin(this.loginForm.value).subscribe(
      (result) => {
        this.responseHandler(result);
      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        if (this.isSignedIn) {
          this.authState.setAuthState(true);
          console.log('Submit button clicked!');
          if (this.isAdmin) {
            this.router.navigate(['/articles']);
          } else {
            this.router.navigate(['/userarticles']);
          }
          this.loginForm.reset();
        } else {
          this.errors = 'You are not authorized to access this page.';
        }
      }
    );
  }
  // Handle response
  responseHandler(data: any) {
    this.token.handleData(data.access_token);
    this.authService.profileUser().subscribe((user: any) => {
      this.authState.setAuthState(true);
      this.authState.setUserRole(user.role); // Store the user role
      this.isAdmin = user.role === 'admin'; // Set the isAdmin property
      if (this.isAdmin) {
        this.isSignedIn = true;
        this.router.navigate(['/articles']);
        this.loginForm.reset();
      } else{
        this.isSignedIn = true;
        this.router.navigate(['/userarticles']);
        this.loginForm.reset();
      }
    });
  }
  
}