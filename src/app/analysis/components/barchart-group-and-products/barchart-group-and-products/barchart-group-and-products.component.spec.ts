import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartGroupAndProductsComponent } from './barchart-group-and-products.component';

describe('BarchartGroupvsproductsComponent', () => {
  let component: BarchartGroupAndProductsComponent;
  let fixture: ComponentFixture<BarchartGroupAndProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarchartGroupAndProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartGroupAndProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
