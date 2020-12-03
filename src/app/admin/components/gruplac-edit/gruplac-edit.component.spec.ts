import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruplacEditComponent } from './gruplac-edit.component';

describe('GruplacEditComponent', () => {
  let component: GruplacEditComponent;
  let fixture: ComponentFixture<GruplacEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GruplacEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GruplacEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
