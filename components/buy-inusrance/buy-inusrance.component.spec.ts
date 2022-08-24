import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyInusranceComponent } from './buy-inusrance.component';

describe('BuyInusranceComponent', () => {
  let component: BuyInusranceComponent;
  let fixture: ComponentFixture<BuyInusranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyInusranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyInusranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
