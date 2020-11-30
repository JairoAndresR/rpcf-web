import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruplacFormComponent } from './gruplac-form.component';

describe('GruplacFormComponent', () => {
  let component: GruplacFormComponent;
  let fixture: ComponentFixture<GruplacFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GruplacFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GruplacFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
