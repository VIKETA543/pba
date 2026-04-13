import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfacilitatortoGradeComponent } from './addfacilitatorto-grade.component';

describe('AddfacilitatortoGradeComponent', () => {
  let component: AddfacilitatortoGradeComponent;
  let fixture: ComponentFixture<AddfacilitatortoGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddfacilitatortoGradeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddfacilitatortoGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
