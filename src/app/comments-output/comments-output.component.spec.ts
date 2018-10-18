import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsOutputComponent } from './comments-output.component';

describe('CommentsOutputComponent', () => {
  let component: CommentsOutputComponent;
  let fixture: ComponentFixture<CommentsOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
