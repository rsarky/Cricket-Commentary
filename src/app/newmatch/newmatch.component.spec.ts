import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmatchComponent } from './newmatch.component';

describe('NewmatchComponent', () => {
  let component: NewmatchComponent;
  let fixture: ComponentFixture<NewmatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewmatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
