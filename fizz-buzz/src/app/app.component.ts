import { Component } from '@angular/core';
import { FizzBuzzServiceService } from './services/fizz-buzz-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fizz-buzz';
  fizzBuzz: any;
  constructor(fizzBuzzService: FizzBuzzServiceService) {
    this.fizzBuzz = fizzBuzzService.FizzBuzz();
  }
}
