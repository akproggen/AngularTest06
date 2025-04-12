import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  werte1 = ['aaa','bbb','ccc'];
  werte2 = [3,4,5,2,3,4,4];
  
  constructor() { }
}
