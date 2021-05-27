/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FizzBuzzValueServiceService } from './fizz-buzz-value-service.service';

describe('Service: fizzBuzzValueService', () => {
  let service: FizzBuzzValueServiceService;
  beforeEach(() => {
    service = new FizzBuzzValueServiceService();
  });

  describe('fizzBuzzVal', () => {
    it('should return "FizzBuzz" for multiples of 15', () => {
      const testValues = [15, 30, 45, 60, 75];
      testValues.forEach((val) => {
        expect(service.fizzBuzzVal(val)).toEqual('FizzBuzz');
      });
    });
    it('should return "Buzz" for multiples of 5', () => {
      const testValues = [5, 10, 20, 25, 35];
      testValues.forEach((val) => {
        expect(service.fizzBuzzVal(val)).toEqual('Buzz');
      });
    });
    //Technically redundant, but put in for posterities sake
    it('should not return "Buzz" for multiples of 5 that are also multiples of 3', () => {
      const testValues = [15, 30, 45, 60];
      testValues.forEach((val) => {
        expect(service.fizzBuzzVal(val)).not.toEqual('Buzz');
      });
    });

    it('should return "Fizz" for multiples of 3', () => {
      const testValues = [3, 6, 9, 12, 18];
      testValues.forEach((val) => {
        expect(service.fizzBuzzVal(val)).toEqual('Fizz');
      });
    });
    //Technically redundant, but put in for posterities sake
    it('should not return "Fizz" for multiples of 5 that are also multiples of 3', () => {
      const testValues = [15, 30, 45, 60];
      testValues.forEach((val) => {
        expect(service.fizzBuzzVal(val)).not.toEqual('Fizz');
      });
    });

    it('should return the number to where it isnt a multiple of 3 or 5', () => {
      const testValues = [1, 2, 4, 7, 8, 11, 13, 14, 16, 17];
      testValues.forEach((val) => {
        expect(service.fizzBuzzVal(val)).toEqual(val.toString());
      });
    });
  });
});
