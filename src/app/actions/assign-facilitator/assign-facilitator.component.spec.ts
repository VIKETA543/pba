import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignFacilitatorComponent } from './assign-facilitator.component';

describe('AssignFacilitatorComponent', () => {
  let component: AssignFacilitatorComponent;
  let fixture: ComponentFixture<AssignFacilitatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignFacilitatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignFacilitatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
