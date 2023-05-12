import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ArticlesComponent } from './admin/articles/articles.component';
import { NewArticleComponent } from './admin/new-article/new-article.component';
import { EditArticleComponent } from './admin/edit-article/edit-article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserArticlesComponent } from './user/userarticles/userarticles.component';

//register
import { AuthInterceptor } from './shared/auth.interceptor';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    UserArticlesComponent,
    NewArticleComponent,
    EditArticleComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
    ProfileEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
