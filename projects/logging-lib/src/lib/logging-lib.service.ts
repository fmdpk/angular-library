import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingLibService {

  constructor() { }

  log(value: string) {
    console.log(`Logging from Logger Service`);
    console.log(value);
  }
}
