import { TestBed } from '@angular/core/testing';

import { DatapasserService } from './datapasser.service';
import { describe, beforeEach, it } from 'node:test';

describe('DatapasserService', () => {
  let service: DatapasserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatapasserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
