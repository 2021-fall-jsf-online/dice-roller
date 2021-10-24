import { TestBed } from '@angular/core/testing';

import { DiceRollingService } from './dice-rolling.service';

describe('DiceRollingService', () => {
  let service: DiceRollingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiceRollingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
