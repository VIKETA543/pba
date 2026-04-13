import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialLoginComponent } from './serial-login.component';

describe('SerialLoginComponent', () => {
  let component: SerialLoginComponent;
  let fixture: ComponentFixture<SerialLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerialLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerialLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
