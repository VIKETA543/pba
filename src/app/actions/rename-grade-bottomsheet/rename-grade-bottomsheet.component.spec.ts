import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenameGradeBottomsheetComponent } from './rename-grade-bottomsheet.component';

describe('RenameGradeBottomsheetComponent', () => {
  let component: RenameGradeBottomsheetComponent;
  let fixture: ComponentFixture<RenameGradeBottomsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenameGradeBottomsheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenameGradeBottomsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
