import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MothersDetailsComponent } from './mothers-details.component';

describe('MothersDetailsComponent', () => {
  let component: MothersDetailsComponent;
  let fixture: ComponentFixture<MothersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MothersDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MothersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
