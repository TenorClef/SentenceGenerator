import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { MadLib } from '../shared/madLib';
import { PrepareMadLibComponent } from './prepare-mad-lib.component';
import { DisplayMadLibComponent } from '../display-mad-lib/display-mad-lib.component';
import { MadLibService } from '../shared/mad-lib.service';

describe('PrepareMadLibComponent', () => {
  let component: PrepareMadLibComponent;
  let fixture: ComponentFixture<PrepareMadLibComponent>;
  let madLibService: MadLibService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ PrepareMadLibComponent, DisplayMadLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepareMadLibComponent);
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
