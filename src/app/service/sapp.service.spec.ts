import { TestBed } from '@angular/core/testing';

import { SappService } from './sapp.service';

describe('SappService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SappService = TestBed.get(SappService);
    expect(service).toBeTruthy();
  });
});
