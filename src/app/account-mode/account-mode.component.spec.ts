import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountModeComponent } from './account-mode.component';

describe('AccountModeComponent', () => {
  let component: AccountModeComponent;
  let fixture: ComponentFixture<AccountModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountModeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
