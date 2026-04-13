import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentheadpromptComponent } from './departmentheadprompt.component';

describe('DepartmentheadpromptComponent', () => {
  let component: DepartmentheadpromptComponent;
  let fixture: ComponentFixture<DepartmentheadpromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentheadpromptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentheadpromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
