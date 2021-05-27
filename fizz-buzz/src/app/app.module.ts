import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FizzBuzzServiceService } from './services/fizz-buzz-service.service';
import { FizzBuzzValueServiceService } from './services/fizz-buzz-value-service.service';
import { ConsoleService } from './services/console.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FizzBuzzServiceService, FizzBuzzValueServiceService, ConsoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
