import { TestBed } from '@angular/core/testing';

import { MadLibService } from './mad-lib.service';

describe('MadLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MadLibService = TestBed.get(MadLibService);
    expect(service).toBeTruthy();
  });
});
