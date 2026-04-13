import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfacilitatorComponent } from './addfacilitator.component';

describe('AddfacilitatorComponent', () => {
  let component: AddfacilitatorComponent;
  let fixture: ComponentFixture<AddfacilitatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddfacilitatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddfacilitatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
