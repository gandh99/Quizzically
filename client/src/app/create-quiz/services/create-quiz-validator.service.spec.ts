import { TestBed } from '@angular/core/testing';

import { CreateQuizValidatorService } from './create-quiz-validator.service';

describe('CreateQuizValidatorService', () => {
  let service: CreateQuizValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateQuizValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
