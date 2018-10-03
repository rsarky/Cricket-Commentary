import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentatorLoginComponent } from './commentator-login.component';

describe('CommentatorLoginComponent', () => {
  let component: CommentatorLoginComponent;
  let fixture: ComponentFixture<CommentatorLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentatorLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentatorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
