import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellForms } from './sell-forms';

describe('SellForms', () => {
  let component: SellForms;
  let fixture: ComponentFixture<SellForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellForms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
