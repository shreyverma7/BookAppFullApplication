import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject('');
  receiveData = this.messageSource.asObservable();
  constructor() { }

  SendData(message: string) {
    console.log(message)
    this.messageSource.next(message)
  }
}
