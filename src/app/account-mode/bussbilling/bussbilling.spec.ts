import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bussbilling } from './bussbilling';

describe('Bussbilling', () => {
  let component: Bussbilling;
  let fixture: ComponentFixture<Bussbilling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bussbilling]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bussbilling);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
