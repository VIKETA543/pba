import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicdashboardComponent } from './academicdashboard.component';

describe('AcademicdashboardComponent', () => {
  let component: AcademicdashboardComponent;
  let fixture: ComponentFixture<AcademicdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicdashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
