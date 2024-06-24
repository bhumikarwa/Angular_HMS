import { TestBed } from '@angular/core/testing';

import { DocloginService } from './doclogin.service';

describe('DocloginService', () => {
  let service: DocloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
