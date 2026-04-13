import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantConsentFormComponent } from './applicant-consent-form.component';

describe('ApplicantConsentFormComponent', () => {
  let component: ApplicantConsentFormComponent;
  let fixture: ComponentFixture<ApplicantConsentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicantConsentFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantConsentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
