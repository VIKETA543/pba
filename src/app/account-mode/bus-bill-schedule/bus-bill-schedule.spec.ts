import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusBillSchedule } from './bus-bill-schedule';

describe('BusBillSchedule', () => {
  let component: BusBillSchedule;
  let fixture: ComponentFixture<BusBillSchedule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusBillSchedule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusBillSchedule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
