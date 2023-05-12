import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditArticleComponent } from './admin/edit-article/edit-article.component';
import { NewArticleComponent } from './admin/new-article/new-article.component';
import { ArticlesComponent } from './admin/articles/articles.component';
import { UserArticlesComponent } from './user/userarticles/userarticles.component';

//register
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: SigninComponent },
  { path: 'register', component: SignupComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'profile-edit', component: ProfileEditComponent },

  
  //interface
  {path:'articles',component:ArticlesComponent},
  {path:'userarticles' ,component:UserArticlesComponent},
  {path:'new-article',component:NewArticleComponent},
  {path: 'add' , component: NewArticleComponent},
  {path: 'edit/:articleId', component:EditArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
