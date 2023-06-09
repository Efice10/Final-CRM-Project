import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserArticlesComponent } from './userarticles.component';

describe('ArticlesComponent', () => {
  let component: UserArticlesComponent;
  let fixture: ComponentFixture<UserArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
