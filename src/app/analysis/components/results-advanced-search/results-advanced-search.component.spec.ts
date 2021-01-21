import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsAdvancedSearchComponent } from './results-advanced-search.component';

describe('ResultsAdvancedSearchComponent', () => {
  let component: ResultsAdvancedSearchComponent;
  let fixture: ComponentFixture<ResultsAdvancedSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsAdvancedSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsAdvancedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
