import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciallevyBilling } from './speciallevy-billing';

describe('SpeciallevyBilling', () => {
  let component: SpeciallevyBilling;
  let fixture: ComponentFixture<SpeciallevyBilling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeciallevyBilling]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeciallevyBilling);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
