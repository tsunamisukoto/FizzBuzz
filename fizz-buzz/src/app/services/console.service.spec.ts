/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConsoleService } from './console.service';

describe('Service: Console', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsoleService]
    });
  });

  it('should ...', inject([ConsoleService], (service: ConsoleService) => {
    expect(service).toBeTruthy();
  }));
});
