import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateTermlyBill } from './generate-termly-bill';

describe('GenerateTermlyBill', () => {
  let component: GenerateTermlyBill;
  let fixture: ComponentFixture<GenerateTermlyBill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateTermlyBill]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateTermlyBill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
