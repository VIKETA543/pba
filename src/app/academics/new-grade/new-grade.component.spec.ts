import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGradeComponent } from './new-grade.component';

describe('NewGradeComponent', () => {
  let component: NewGradeComponent;
  let fixture: ComponentFixture<NewGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewGradeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
