/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FizzBuzzServiceService } from './fizz-buzz-service.service';
import { FizzBuzzValueServiceService } from './fizz-buzz-value-service.service';

describe('Service: FizzBuzzService', () => {
  let fbValServiceSpy: any;
  let consoleSpy: any;
  let service: FizzBuzzServiceService;
  beforeEach(() => {
    fbValServiceSpy = jasmine.createSpyObj('FizzBuzzValueServiceService', ['fizzBuzzVal']);
    consoleSpy = jasmine.createSpyObj('ConsoleSerice', ['log']);
    service = new FizzBuzzServiceService(fbValServiceSpy, consoleSpy);
  });

  it('should call fizzBuzzVal method on child component 100 times', () => {
    fbValServiceSpy.fizzBuzzVal.and.returnValue('hi');
    service.FizzBuzz();

    expect(fbValServiceSpy.fizzBuzzVal).toHaveBeenCalledTimes(100);
    expect(consoleSpy.log).toHaveBeenCalledTimes(100);
  });
});
