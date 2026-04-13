import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptimgBottomsheetComponent } from './deptimg-bottomsheet.component';

describe('DeptimgBottomsheetComponent', () => {
  let component: DeptimgBottomsheetComponent;
  let fixture: ComponentFixture<DeptimgBottomsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeptimgBottomsheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptimgBottomsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
