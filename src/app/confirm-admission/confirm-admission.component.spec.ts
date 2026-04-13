import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmAdmissionComponent } from './confirm-admission.component';

describe('ConfirmAdmissionComponent', () => {
  let component: ConfirmAdmissionComponent;
  let fixture: ComponentFixture<ConfirmAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmAdmissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
