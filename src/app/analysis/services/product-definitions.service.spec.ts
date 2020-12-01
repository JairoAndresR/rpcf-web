import { TestBed } from '@angular/core/testing';

import { ProductDefinitionsService } from './product-definitions.service';

describe('ProductDefinitionsService', () => {
  let service: ProductDefinitionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDefinitionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
