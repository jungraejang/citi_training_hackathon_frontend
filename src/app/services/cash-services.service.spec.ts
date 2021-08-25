import { TestBed } from '@angular/core/testing';

import { CashServicesService } from './cash-services.service';

describe('CashServicesService', () => {
  let service: CashServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CashServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
