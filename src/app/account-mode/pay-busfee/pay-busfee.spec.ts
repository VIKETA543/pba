import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayBusfee } from './pay-busfee';

describe('PayBusfee', () => {
  let component: PayBusfee;
  let fixture: ComponentFixture<PayBusfee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayBusfee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayBusfee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
