import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
  
// User interface
export class User {
  name!: string;
  email!: string;
  password!: string;
  password_confirmation!: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // User registration
  register(user: User): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/register', user);
  }

  // Login
  signin(user: User): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/auth/login', user);
  }

  // Access user profile
  profileUser() {
    return this.http.get(`http://127.0.0.1:8000/api/auth/user-profile`);
  }

  updateProfile(userProfile: any) {
    return this.http.put(`http://127.0.0.1:8000/api/auth/user-profile`, userProfile);
  }
 
}
