import { Injectable } from '@angular/core';

@Injectable()
export class FizzBuzzValueServiceService {

    constructor() { }
    public fizzBuzzVal(val: number): string {
        if(val % 15 === 0) {
            return "FizzBuzz";
        }
        else if (val % 5 === 0)  {
            return "Buzz";
        }
        else if (val % 3 === 0) {
            return "Fizz";
        }
        else {
            return val.toString();
        }
    }
}
