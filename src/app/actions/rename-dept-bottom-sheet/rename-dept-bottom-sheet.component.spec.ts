import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenameDeptBottomSheetComponent } from './rename-dept-bottom-sheet.component';

describe('RenameDeptBottomSheetComponent', () => {
  let component: RenameDeptBottomSheetComponent;
  let fixture: ComponentFixture<RenameDeptBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenameDeptBottomSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenameDeptBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
