import { TestBed } from '@angular/core/testing';

import { ProductFactService } from './product-fact.service';

describe('ProductFactService', () => {
  let service: ProductFactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductFactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
