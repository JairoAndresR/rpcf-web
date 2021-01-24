import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartAuthorsAndProductsComponent } from './barchart-authors-and-products.component';

describe('BarchartAuthorsvsproductsComponent', () => {
  let component: BarchartAuthorsAndProductsComponent;
  let fixture: ComponentFixture<BarchartAuthorsAndProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarchartAuthorsAndProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartAuthorsAndProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
