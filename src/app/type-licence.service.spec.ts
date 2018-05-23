import { TestBed, inject } from '@angular/core/testing';

import { TypeLicenceService } from './type-licence.service';

describe('TypeLicenceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeLicenceService]
    });
  });

  it('should be created', inject([TypeLicenceService], (service: TypeLicenceService) => {
    expect(service).toBeTruthy();
  }));
});
