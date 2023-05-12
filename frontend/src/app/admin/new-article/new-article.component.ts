import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {

  constructor(private articleService: ArticleService, private router:Router) { }
  
  articles:any;
  ngOnInit(): void {
    
  }

  add(articleName:string,articleCompany:string,articlePosition:string,articleEmail:string,articleAddress:string,articleOffice:string){
    this.articles = {
      'name' : articleName,
      'company' : articleCompany,
      'position' : articlePosition,
      'email' : articleEmail,
      'address' : articleAddress,
      'office' : articleOffice
    };
    this.articleService.addArticle(this.articles as any).subscribe(article=>{
      this.articles = article;
      this.router.navigateByUrl('/articles');
    });
    console.log(this.articles);
  }
}
