import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalListPromptComponent } from './withdrawal-list-prompt.component';

describe('WithdrawalListPromptComponent', () => {
  let component: WithdrawalListPromptComponent;
  let fixture: ComponentFixture<WithdrawalListPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithdrawalListPromptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithdrawalListPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
