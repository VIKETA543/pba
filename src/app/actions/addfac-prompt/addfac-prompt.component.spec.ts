import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfacPromptComponent } from './addfac-prompt.component';

describe('AddfacPromptComponent', () => {
  let component: AddfacPromptComponent;
  let fixture: ComponentFixture<AddfacPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddfacPromptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddfacPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
