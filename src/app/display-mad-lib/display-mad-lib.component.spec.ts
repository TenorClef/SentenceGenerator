import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMadLibComponent } from './display-mad-lib.component';

describe('DisplayMadLibComponent', () => {
  let component: DisplayMadLibComponent;
  let fixture: ComponentFixture<DisplayMadLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMadLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMadLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
