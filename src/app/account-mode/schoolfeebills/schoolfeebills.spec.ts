import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Schoolfeebills } from './schoolfeebills';

describe('Schoolfeebills', () => {
  let component: Schoolfeebills;
  let fixture: ComponentFixture<Schoolfeebills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Schoolfeebills]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Schoolfeebills);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
