import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicdepartmentComponent } from './academicdepartment.component';

describe('AcademicdepartmentComponent', () => {
  let component: AcademicdepartmentComponent;
  let fixture: ComponentFixture<AcademicdepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicdepartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicdepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
