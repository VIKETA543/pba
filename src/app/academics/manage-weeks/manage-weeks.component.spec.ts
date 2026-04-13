import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWeeksComponent } from './manage-weeks.component';

describe('ManageWeeksComponent', () => {
  let component: ManageWeeksComponent;
  let fixture: ComponentFixture<ManageWeeksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageWeeksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageWeeksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
