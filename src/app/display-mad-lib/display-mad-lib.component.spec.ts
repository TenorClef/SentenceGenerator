import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DisplayMadLibComponent } from './display-mad-lib.component';
import { MadLibService } from '../shared/mad-lib.service';
import { MadLib } from '../shared/madLib';

describe('DisplayMadLibComponent', () => {
  let component: DisplayMadLibComponent;
  let fixture: ComponentFixture<DisplayMadLibComponent>;
  let madLibService: MadLibService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ DisplayMadLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMadLibComponent);
    component = fixture.componentInstance;
    madLibService = new MadLibService();
    madLibService.getRandomMadLib()
    .subscribe(data => component.madLib = data);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
