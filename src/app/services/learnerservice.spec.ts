/// <reference types="jasmine" />
import { TestBed } from '@angular/core/testing';

import { Learnerservice } from './learnerservice';
describe('Learnerservice', () => {
  let service: Learnerservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Learnerservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
