import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminclaimapproveComponent } from './adminclaimapprove.component';

describe('AdminclaimapproveComponent', () => {
  let component: AdminclaimapproveComponent;
  let fixture: ComponentFixture<AdminclaimapproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminclaimapproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminclaimapproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
