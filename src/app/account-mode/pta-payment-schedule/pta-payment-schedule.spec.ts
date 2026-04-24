import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtaPaymentSchedule } from './pta-payment-schedule';

describe('PtaPaymentSchedule', () => {
  let component: PtaPaymentSchedule;
  let fixture: ComponentFixture<PtaPaymentSchedule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PtaPaymentSchedule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtaPaymentSchedule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
