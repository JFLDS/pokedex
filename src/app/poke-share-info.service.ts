import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {
  value: string = '';
  public stringVar = new Subject<string>();

  getObservable(): Subject<string>{
    return this.stringVar;
  }

  setObservable(stringVar: string) {
    this.stringVar.next(stringVar);
  }

  constructor() { }

  getValue(): string {
    return this.value;
  }

  setValue(value: string) {
    this.value = value;
  }
}
