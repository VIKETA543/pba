import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewApplicantionComponent } from './review-applicantion.component';

describe('ReviewApplicantionComponent', () => {
  let component: ReviewApplicantionComponent;
  let fixture: ComponentFixture<ReviewApplicantionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewApplicantionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewApplicantionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
