import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewAdmissionComponent } from './review-admission.component';

describe('ReviewAdmissionComponent', () => {
  let component: ReviewAdmissionComponent;
  let fixture: ComponentFixture<ReviewAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewAdmissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
