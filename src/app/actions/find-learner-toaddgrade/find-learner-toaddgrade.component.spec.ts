import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindLearnerTOAddgradeComponent } from './find-learner-toaddgrade.component';

describe('FindLearnerTOAddgradeComponent', () => {
  let component: FindLearnerTOAddgradeComponent;
  let fixture: ComponentFixture<FindLearnerTOAddgradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindLearnerTOAddgradeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindLearnerTOAddgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
