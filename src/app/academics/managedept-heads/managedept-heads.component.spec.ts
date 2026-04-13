import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedeptHeadsComponent } from './managedept-heads.component';

describe('ManagedeptHeadsComponent', () => {
  let component: ManagedeptHeadsComponent;
  let fixture: ComponentFixture<ManagedeptHeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagedeptHeadsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagedeptHeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
