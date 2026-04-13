import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAcademicSessionComponent } from './manage-academic-session.component';

describe('ManageAcademicSessionComponent', () => {
  let component: ManageAcademicSessionComponent;
  let fixture: ComponentFixture<ManageAcademicSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAcademicSessionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAcademicSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
