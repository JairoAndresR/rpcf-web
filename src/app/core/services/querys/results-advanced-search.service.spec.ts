import { TestBed } from '@angular/core/testing';

import { ResultsAdvancedSearchService } from './results-advanced-search.service';

describe('ResultsAdvancedSearchService', () => {
  let service: ResultsAdvancedSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultsAdvancedSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
