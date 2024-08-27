import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsPaginationComponent } from './authors-pagination.component';

describe('AuthorsPaginationComponent', () => {
  let component: AuthorsPaginationComponent;
  let fixture: ComponentFixture<AuthorsPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorsPaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorsPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
