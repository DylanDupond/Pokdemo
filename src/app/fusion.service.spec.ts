import { TestBed } from '@angular/core/testing';

import { FUSIONService } from './fusion.service';

describe('FUSIONService', () => {
  let service: FUSIONService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FUSIONService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
