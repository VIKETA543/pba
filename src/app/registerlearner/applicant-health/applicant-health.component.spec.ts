import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantHealthComponent } from './applicant-health.component';

describe('ApplicantHealthComponent', () => {
  let component: ApplicantHealthComponent;
  let fixture: ComponentFixture<ApplicantHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicantHealthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
