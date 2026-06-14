import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsManager } from './forms-manager';

describe('FormsManager', () => {
  let component: FormsManager;
  let fixture: ComponentFixture<FormsManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsManager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
