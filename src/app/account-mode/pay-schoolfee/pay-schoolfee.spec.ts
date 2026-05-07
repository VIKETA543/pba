import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaySchoolfee } from './pay-schoolfee';

describe('PaySchoolfee', () => {
  let component: PaySchoolfee;
  let fixture: ComponentFixture<PaySchoolfee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaySchoolfee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaySchoolfee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
