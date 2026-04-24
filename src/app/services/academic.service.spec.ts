import { TestBed } from '@angular/core/testing';

import { AcademicService } from './academic.service';
import { describe, beforeEach, it } from 'node:test';

describe('AcademicService', () => {
  let service: AcademicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcademicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
