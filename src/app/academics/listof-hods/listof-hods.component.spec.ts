import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofHodsComponent } from './listof-hods.component';

describe('ListofHodsComponent', () => {
  let component: ListofHodsComponent;
  let fixture: ComponentFixture<ListofHodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListofHodsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListofHodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
