import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaySpeciallevy } from './pay-speciallevy';

describe('PaySpeciallevy', () => {
  let component: PaySpeciallevy;
  let fixture: ComponentFixture<PaySpeciallevy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaySpeciallevy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaySpeciallevy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
