import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterlearnerComponent } from './registerlearner.component';

describe('RegisterlearnerComponent', () => {
  let component: RegisterlearnerComponent;
  let fixture: ComponentFixture<RegisterlearnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterlearnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterlearnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
