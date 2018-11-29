import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareMadLibComponent } from './prepare-mad-lib.component';

describe('PrepareMadLibComponent', () => {
  let component: PrepareMadLibComponent;
  let fixture: ComponentFixture<PrepareMadLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepareMadLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepareMadLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
