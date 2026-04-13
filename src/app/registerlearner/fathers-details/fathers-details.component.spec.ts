import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FathersDetailsComponent } from './fathers-details.component';

describe('FathersDetailsComponent', () => {
  let component: FathersDetailsComponent;
  let fixture: ComponentFixture<FathersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FathersDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FathersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
