import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  url:string = 'http://localhost:8000';
  token:string = ''; // JWT token
  
  constructor(private http: HttpClient) { }
  
  // Function to set the JWT token
  setToken(token: string) {
    this.token = token;
  }

  listArticles(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<any>(`${this.url}/api/articles`, { headers });
  }

  addArticle(article: any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.post<any>(`${this.url}/api/articles`, article, { headers });
  }

  find(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get(`${this.url}/api/articles/${id}`, { headers });
  }

  update(id: number, article: any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.put(`${this.url}/api/articles/${id}`, article, { headers });
  }

  deleteArticle(id: any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.delete<any>(`${this.url}/api/articles/${id}`, { headers });
  }
}
