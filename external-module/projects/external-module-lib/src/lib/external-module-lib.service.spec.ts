import { TestBed, inject } from '@angular/core/testing';

import { ExternalModuleLibService } from './external-module-lib.service';

describe('ExternalModuleLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExternalModuleLibService]
    });
  });

  it('should be created', inject([ExternalModuleLibService], (service: ExternalModuleLibService) => {
    expect(service).toBeTruthy();
  }));
});
