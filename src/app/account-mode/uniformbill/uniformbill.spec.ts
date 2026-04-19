import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uniformbill } from './uniformbill';

describe('Uniformbill', () => {
  let component: Uniformbill;
  let fixture: ComponentFixture<Uniformbill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Uniformbill]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uniformbill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
