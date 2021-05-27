## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Relevant information for coding challenge

I have created 2 services, one injected into the other for the fizzbuzz problem. They can be found under `src/app/services`
One is the FizzBuzzValueService. This one does the meat of the work. It processes/parses the input value and outputs the correct string value
the other is FizzBuzzService which simply loops 100 times, and then outputs the child components value.
Also created consoleService which is just so when running the unit tests I could inject a dummy method that didnt output anything.
Following TDD I started by filling out my specs. I ensured that all cases (multiples of 15, 5, and 3, as well as the other case will be met by my solution. These tests would obviously fail as there wasnt any code to satisfy them yet.
I then wrote code to satisfy these conditions. I did actually notice in the Fizz case I had written my tests wrong but only when I actually wrote the code (I was testing for Buzz, darn copy paste :P) As it was a simple problem I didn't mock things like the console etc. (Also as it was a simple function there wasnt much room for refactoring while still retaining readability)
NOTE:
You may need to run npm i (To save on file size I didnt copy the node modules folder)
Running `ng test` will demonstrate my unit tests
Running `ng serve` and navigating to http://localhost:4200/ will demonstrate it in practice. You can also open console (f12) to view output there if you prefer.
