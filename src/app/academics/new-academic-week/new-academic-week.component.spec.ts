import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAcademicWeekComponent } from './new-academic-week.component';

describe('NewAcademicWeekComponent', () => {
  let component: NewAcademicWeekComponent;
  let fixture: ComponentFixture<NewAcademicWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewAcademicWeekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAcademicWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
