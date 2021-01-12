import { TestBed } from '@angular/core/testing';

import { ResearcherProductService } from './researcher-product.service';

describe('ResearcherProductService', () => {
  let service: ResearcherProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResearcherProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
