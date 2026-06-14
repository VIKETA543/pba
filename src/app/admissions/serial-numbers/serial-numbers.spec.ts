import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialNumbers } from './serial-numbers';

describe('SerialNumbers', () => {
  let component: SerialNumbers;
  let fixture: ComponentFixture<SerialNumbers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerialNumbers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerialNumbers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
