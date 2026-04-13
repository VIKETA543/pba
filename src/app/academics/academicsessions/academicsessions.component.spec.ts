import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicsessionsComponent } from './academicsessions.component';

describe('AcademicsessionsComponent', () => {
  let component: AcademicsessionsComponent;
  let fixture: ComponentFixture<AcademicsessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicsessionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicsessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
