import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpassordComponent } from './forgotpassord.component';

describe('ForgotpassordComponent', () => {
  let component: ForgotpassordComponent;
  let fixture: ComponentFixture<ForgotpassordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotpassordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotpassordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
