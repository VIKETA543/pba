import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionWithdrawalComponent } from './admission-withdrawal.component';

describe('AdmissionWithdrawalComponent', () => {
  let component: AdmissionWithdrawalComponent;
  let fixture: ComponentFixture<AdmissionWithdrawalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmissionWithdrawalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionWithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
