import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartGroupvsproductsComponent } from './barchart-groupvsproducts.component';

describe('BarchartGroupvsproductsComponent', () => {
  let component: BarchartGroupvsproductsComponent;
  let fixture: ComponentFixture<BarchartGroupvsproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarchartGroupvsproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartGroupvsproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
