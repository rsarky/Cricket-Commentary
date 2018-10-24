import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningMatchesComponent } from './running-matches.component';

describe('RunningMatchesComponent', () => {
  let component: RunningMatchesComponent;
  let fixture: ComponentFixture<RunningMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunningMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
