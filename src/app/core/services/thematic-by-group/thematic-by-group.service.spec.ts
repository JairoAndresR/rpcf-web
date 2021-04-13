import { TestBed } from '@angular/core/testing';

import { ThematicByGroupService } from './thematic-by-group.service';

describe('ThematicByGroupService', () => {
  let service: ThematicByGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThematicByGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
