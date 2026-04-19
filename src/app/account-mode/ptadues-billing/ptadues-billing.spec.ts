import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtaduesBilling } from './ptadues-billing';

describe('PtaduesBilling', () => {
  let component: PtaduesBilling;
  let fixture: ComponentFixture<PtaduesBilling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PtaduesBilling]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtaduesBilling);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
