import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLearnerTOAddgradeComponent } from './add-learner-toaddgrade.component';

describe('AddLearnerTOAddgradeComponent', () => {
  let component: AddLearnerTOAddgradeComponent;
  let fixture: ComponentFixture<AddLearnerTOAddgradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLearnerTOAddgradeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLearnerTOAddgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
