import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartAuthorsvsproductsComponent } from './barchart-authorsvsproducts.component';

describe('BarchartAuthorsvsproductsComponent', () => {
  let component: BarchartAuthorsvsproductsComponent;
  let fixture: ComponentFixture<BarchartAuthorsvsproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarchartAuthorsvsproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartAuthorsvsproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
