import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawnListComponent } from './withdrawn-list.component';

describe('WithdrawnListComponent', () => {
  let component: WithdrawnListComponent;
  let fixture: ComponentFixture<WithdrawnListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithdrawnListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithdrawnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
