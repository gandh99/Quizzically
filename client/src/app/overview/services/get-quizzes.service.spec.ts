import { TestBed } from '@angular/core/testing';

import { GetQuizzesService } from './get-quizzes.service';

describe('GetQuizzesService', () => {
  let service: GetQuizzesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetQuizzesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
