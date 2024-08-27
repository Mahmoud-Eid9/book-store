import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorBooksAddComponent } from './author-books-add.component';

describe('AuthorBooksAddComponent', () => {
  let component: AuthorBooksAddComponent;
  let fixture: ComponentFixture<AuthorBooksAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorBooksAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorBooksAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
