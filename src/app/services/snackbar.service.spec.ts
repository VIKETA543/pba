import { TestBed } from '@angular/core/testing';

import { SnackbarService } from './snackbar.service';
import { describe, beforeEach, it } from 'node:test';
import { strict as assert } from 'node:assert';

describe('SnackbarService', () => {
  let service: SnackbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnackbarService);
  });

  it('should be created', () => {
    assert.ok(service);
  });
});
