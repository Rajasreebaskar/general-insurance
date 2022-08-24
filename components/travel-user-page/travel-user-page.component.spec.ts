import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelUserPageComponent } from './travel-user-page.component';

describe('TravelUserPageComponent', () => {
  let component: TravelUserPageComponent;
  let fixture: ComponentFixture<TravelUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelUserPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
