import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropLearnerActionComponent } from './drop-learner-action.component';

describe('DropLearnerActionComponent', () => {
  let component: DropLearnerActionComponent;
  let fixture: ComponentFixture<DropLearnerActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropLearnerActionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropLearnerActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
