import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentLandingComponent } from './comment-landing.component';

describe('CommentLandingComponent', () => {
  let component: CommentLandingComponent;
  let fixture: ComponentFixture<CommentLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
