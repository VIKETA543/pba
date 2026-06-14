import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePins } from './generate-pins';

describe('GeneratePins', () => {
  let component: GeneratePins;
  let fixture: ComponentFixture<GeneratePins>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneratePins]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratePins);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
