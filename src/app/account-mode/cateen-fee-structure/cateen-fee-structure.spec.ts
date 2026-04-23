import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateenFeeStructure } from './cateen-fee-structure';

describe('CateenFeeStructure', () => {
  let component: CateenFeeStructure;
  let fixture: ComponentFixture<CateenFeeStructure>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CateenFeeStructure]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CateenFeeStructure);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
