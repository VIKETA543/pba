import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Learneraccount } from './learneraccount';

describe('Learneraccount', () => {
  let component: Learneraccount;
  let fixture: ComponentFixture<Learneraccount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Learneraccount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Learneraccount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
