import { TestBed } from '@angular/core/testing';

import { GruplacDefinitionsService } from "./gruplacDefinitions.service";

describe('GruplacDefinitionsService', () => {
  let service: GruplacDefinitionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GruplacDefinitionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
