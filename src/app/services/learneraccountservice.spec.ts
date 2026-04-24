import { TestBed } from '@angular/core/testing';

import { LearneraccountServcie } from './learneraccountservoce';
import { describe, beforeEach, it } from 'node:test';

describe('Learneraccount', () => {
  let service: LearneraccountServcie;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearneraccountServcie);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
