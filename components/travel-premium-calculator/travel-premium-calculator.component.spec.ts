import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelPremiumCalculatorComponent } from './travel-premium-calculator.component';

describe('TravelPremiumCalculatorComponent', () => {
  let component: TravelPremiumCalculatorComponent;
  let fixture: ComponentFixture<TravelPremiumCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelPremiumCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelPremiumCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
