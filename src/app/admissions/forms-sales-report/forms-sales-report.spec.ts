import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsSalesReport } from './forms-sales-report';

describe('FormsSalesReport', () => {
  let component: FormsSalesReport;
  let fixture: ComponentFixture<FormsSalesReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsSalesReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsSalesReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
