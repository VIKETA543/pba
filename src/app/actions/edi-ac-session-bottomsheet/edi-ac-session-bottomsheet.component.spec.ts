import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiAcSessionBottomsheetComponent } from './edi-ac-session-bottomsheet.component';

describe('EdiAcSessionBottomsheetComponent', () => {
  let component: EdiAcSessionBottomsheetComponent;
  let fixture: ComponentFixture<EdiAcSessionBottomsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdiAcSessionBottomsheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdiAcSessionBottomsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
