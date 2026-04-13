import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdralPropmtComponent } from './withdral-propmt.component';

describe('WithdralPropmtComponent', () => {
  let component: WithdralPropmtComponent;
  let fixture: ComponentFixture<WithdralPropmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithdralPropmtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithdralPropmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
