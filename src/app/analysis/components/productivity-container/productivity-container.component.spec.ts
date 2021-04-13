import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductivityContainerComponent } from './productivity-container.component';

describe('ProductivityContainerComponent', () => {
  let component: ProductivityContainerComponent;
  let fixture: ComponentFixture<ProductivityContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductivityContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductivityContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
