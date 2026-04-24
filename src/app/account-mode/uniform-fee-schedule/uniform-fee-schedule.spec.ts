import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniformFeeSchedule } from './uniform-fee-schedule';

describe('UniformFeeSchedule', () => {
  let component: UniformFeeSchedule;
  let fixture: ComponentFixture<UniformFeeSchedule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniformFeeSchedule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniformFeeSchedule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
