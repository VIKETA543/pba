import { TestBed } from '@angular/core/testing';

import { AdmissionSvcService } from './admission-svc.service';
import { describe, beforeEach, it } from 'node:test';

describe('AdmissionSvcService', () => {
  let service: AdmissionSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmissionSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
