import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiceRollingService {

  constructor() { }

  rollHistory: any[] = [];

  addRollHistory = (roll: any) => {
    this.rollHistory = [
      ...this.rollHistory
      , roll
    ];
  };

}
