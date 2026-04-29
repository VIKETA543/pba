import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepecialLevySchedule } from './sepecial-levy-schedule';

describe('SepecialLevySchedule', () => {
  let component: SepecialLevySchedule;
  let fixture: ComponentFixture<SepecialLevySchedule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SepecialLevySchedule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SepecialLevySchedule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
