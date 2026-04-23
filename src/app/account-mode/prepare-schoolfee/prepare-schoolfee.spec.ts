import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareSchoolfee } from './prepare-schoolfee';

describe('PrepareSchoolfee', () => {
  let component: PrepareSchoolfee;
  let fixture: ComponentFixture<PrepareSchoolfee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrepareSchoolfee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrepareSchoolfee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
