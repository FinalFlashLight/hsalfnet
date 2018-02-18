import { TestBed, inject } from '@angular/core/testing';

import { UserservService } from './userserv.service';

describe('UserservService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserservService]
    });
  });

  it('should be created', inject([UserservService], (service: UserservService) => {
    expect(service).toBeTruthy();
  }));
});
