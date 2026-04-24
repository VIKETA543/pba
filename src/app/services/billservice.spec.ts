import { TestBed } from '@angular/core/testing';

import { Billservice } from './billservice';
import { describe, beforeEach, it } from 'node:test';

describe('Billservice', () => {
  let service: Billservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Billservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
