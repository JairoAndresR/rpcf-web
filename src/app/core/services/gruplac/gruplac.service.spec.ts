import { TestBed } from '@angular/core/testing';

import { GruplacService } from './gruplac.service';

describe('GruplacService', () => {
  let service: GruplacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GruplacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
