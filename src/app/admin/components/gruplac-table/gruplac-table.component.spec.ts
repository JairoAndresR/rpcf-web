import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruplacTableComponent } from './gruplac-table.component';

describe('GruplacTableComponent', () => {
  let component: GruplacTableComponent;
  let fixture: ComponentFixture<GruplacTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GruplacTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GruplacTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
