import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupReportSelectorComponent } from './group-report-selector.component';

describe('GroupReportSelectorComponent', () => {
  let component: GroupReportSelectorComponent;
  let fixture: ComponentFixture<GroupReportSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupReportSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupReportSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
