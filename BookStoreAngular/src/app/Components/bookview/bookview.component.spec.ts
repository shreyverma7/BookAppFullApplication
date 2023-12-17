import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookviewComponent } from './bookview.component';

describe('BookviewComponent', () => {
  let component: BookviewComponent;
  let fixture: ComponentFixture<BookviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookviewComponent]
    });
    fixture = TestBed.createComponent(BookviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
