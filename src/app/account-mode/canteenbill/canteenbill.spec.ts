import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Canteenbill } from './canteenbill';

describe('Canteenbill', () => {
  let component: Canteenbill;
  let fixture: ComponentFixture<Canteenbill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Canteenbill]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Canteenbill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
