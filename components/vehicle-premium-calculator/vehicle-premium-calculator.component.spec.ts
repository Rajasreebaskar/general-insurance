import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclePremiumCalculatorComponent } from './vehicle-premium-calculator.component';

describe('VehiclePremiumCalculatorComponent', () => {
  let component: VehiclePremiumCalculatorComponent;
  let fixture: ComponentFixture<VehiclePremiumCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclePremiumCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclePremiumCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
