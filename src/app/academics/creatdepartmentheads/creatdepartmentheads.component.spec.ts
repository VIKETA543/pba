import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatdepartmentheadsComponent } from './creatdepartmentheads.component';

describe('CreatdepartmentheadsComponent', () => {
  let component: CreatdepartmentheadsComponent;
  let fixture: ComponentFixture<CreatdepartmentheadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatdepartmentheadsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatdepartmentheadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
