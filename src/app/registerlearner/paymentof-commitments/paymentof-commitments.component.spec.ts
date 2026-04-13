import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentofCommitmentsComponent } from './paymentof-commitments.component';

describe('PaymentofCommitmentsComponent', () => {
  let component: PaymentofCommitmentsComponent;
  let fixture: ComponentFixture<PaymentofCommitmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentofCommitmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentofCommitmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
