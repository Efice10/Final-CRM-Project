import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { HttpClient } from '@angular/common/http';
import { AuthService,User } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  isAdmin!: boolean;
  UserProfile!: User;

  constructor(private articleService: ArticleService, private http: HttpClient, public authService: AuthService) {
    this.http.get('/api/user').subscribe((user: any) => {
      this.isAdmin = user.role === 'admin';
    });
    this.authService.profileUser().subscribe((data: any) => {
      this.UserProfile = data;
    });
  }

  articles: any;
  readData: any;

  ngOnInit(): void {
    // Get the JWT token from localStorage
    const token = localStorage.getItem('jwt_token');

    // If there is a token, set it in the ArticleService
    if (token) {
      this.articleService.setToken(token);
    }

    // Call the listArticles() method to get a list of articles
    this.showArticles();
  }

  showArticles() {
    this.articles = this.articleService.listArticles().subscribe(article => {
      this.articles = article;
      console.log(this.articles);
    });
  }

  deleteArticle(id: any) {
    this.articleService.deleteArticle(id).subscribe(res => {
      this.articles = this.articles.filter((a: any) => a.id == id);
      this.showArticles();
    });
  }
}
