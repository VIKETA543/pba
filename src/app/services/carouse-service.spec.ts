import { TestBed } from '@angular/core/testing';

import { CarouseService } from './carouse-service';

describe('CarouseService', () => {
  let service: CarouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
