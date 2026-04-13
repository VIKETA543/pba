import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfacilitatorsComponent } from './listfacilitators.component';

describe('ListfacilitatorsComponent', () => {
  let component: ListfacilitatorsComponent;
  let fixture: ComponentFixture<ListfacilitatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListfacilitatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListfacilitatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
