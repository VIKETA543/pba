import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropLearnerFromGrameComponent } from './drop-learner-from-grame.component';

describe('DropLearnerFromGrameComponent', () => {
  let component: DropLearnerFromGrameComponent;
  let fixture: ComponentFixture<DropLearnerFromGrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropLearnerFromGrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropLearnerFromGrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
