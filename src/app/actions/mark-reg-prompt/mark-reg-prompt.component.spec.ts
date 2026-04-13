import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkRegPromptComponent } from './mark-reg-prompt.component';

describe('MarkRegPromptComponent', () => {
  let component: MarkRegPromptComponent;
  let fixture: ComponentFixture<MarkRegPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkRegPromptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkRegPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
