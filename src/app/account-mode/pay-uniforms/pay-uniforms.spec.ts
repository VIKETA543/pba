import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayUniforms } from './pay-uniforms';

describe('PayUniforms', () => {
  let component: PayUniforms;
  let fixture: ComponentFixture<PayUniforms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayUniforms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayUniforms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
