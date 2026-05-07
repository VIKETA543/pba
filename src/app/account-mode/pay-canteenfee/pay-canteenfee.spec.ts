import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayCanteenfee } from './pay-canteenfee';

describe('PayCanteenfee', () => {
  let component: PayCanteenfee;
  let fixture: ComponentFixture<PayCanteenfee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayCanteenfee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayCanteenfee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
