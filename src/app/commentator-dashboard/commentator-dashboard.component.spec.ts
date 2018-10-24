import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentatorDashboardComponent } from './commentator-dashboard.component';

describe('CommentatorDashboardComponent', () => {
  let component: CommentatorDashboardComponent;
  let fixture: ComponentFixture<CommentatorDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentatorDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentatorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
