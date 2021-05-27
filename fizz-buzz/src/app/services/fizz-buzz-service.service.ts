import { Injectable } from '@angular/core';
import { FizzBuzzValueServiceService } from './fizz-buzz-value-service.service';
import { ConsoleService } from './console.service';

@Injectable()
export class FizzBuzzServiceService {

    constructor(private readonly fbValService: FizzBuzzValueServiceService, private readonly console: ConsoleService) { }

    public FizzBuzz(): Array<string> {
        let retVal = [];
        for (let i = 0; i < 100; i++) {
            let fbVal = this.fbValService.fizzBuzzVal(i + 1);
            this.console.log(fbVal);
            retVal.push(fbVal);
        }
        return retVal;
    }
}
