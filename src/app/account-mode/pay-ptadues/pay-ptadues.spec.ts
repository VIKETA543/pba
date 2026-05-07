import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayPTADues } from './pay-ptadues';

describe('PayPTADues', () => {
  let component: PayPTADues;
  let fixture: ComponentFixture<PayPTADues>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayPTADues]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayPTADues);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
