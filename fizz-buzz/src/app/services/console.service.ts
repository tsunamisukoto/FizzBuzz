import { Injectable } from '@angular/core';

@Injectable()
export class ConsoleService {
    constructor() { }
    log = (val: string) => {
        console.log(val);
    }
}
