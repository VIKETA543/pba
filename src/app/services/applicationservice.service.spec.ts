import { TestBed } from '@angular/core/testing';

import { ApplicationserviceService } from './applicationservice.service';
import { describe, beforeEach, it } from 'node:test';

describe('ApplicationserviceService', () => {
  let service: ApplicationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
