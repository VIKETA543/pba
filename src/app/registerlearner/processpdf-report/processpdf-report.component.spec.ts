import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesspdfReportComponent } from './processpdf-report.component';

describe('ProcesspdfReportComponent', () => {
  let component: ProcesspdfReportComponent;
  let fixture: ComponentFixture<ProcesspdfReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcesspdfReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcesspdfReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
