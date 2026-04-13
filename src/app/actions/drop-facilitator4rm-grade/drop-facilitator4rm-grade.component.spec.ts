import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropFacilitator4rmGradeComponent } from './drop-facilitator4rm-grade.component';

describe('DropFacilitator4rmGradeComponent', () => {
  let component: DropFacilitator4rmGradeComponent;
  let fixture: ComponentFixture<DropFacilitator4rmGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropFacilitator4rmGradeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropFacilitator4rmGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
