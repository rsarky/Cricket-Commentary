import { TestBed } from '@angular/core/testing';

import { MatchInfoService } from './match-info.service';

describe('MatchInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchInfoService = TestBed.get(MatchInfoService);
    expect(service).toBeTruthy();
  });
});
