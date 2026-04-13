import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperantionsBottomsheetComponent } from './operantions-bottomsheet.component';

describe('OperantionsBottomsheetComponent', () => {
  let component: OperantionsBottomsheetComponent;
  let fixture: ComponentFixture<OperantionsBottomsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperantionsBottomsheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperantionsBottomsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
