import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearcherSelectorComponent } from './researcher-selector.component';

describe('ResearcherSelectorComponent', () => {
  let component: ResearcherSelectorComponent;
  let fixture: ComponentFixture<ResearcherSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearcherSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearcherSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
