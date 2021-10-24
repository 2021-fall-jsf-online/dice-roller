import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DiceRollingService } from '../dice-rolling.service';

@Component({
  selector: 'app-roll-a-die',
  templateUrl: './roll-a-die.component.html',
  styleUrls: ['./roll-a-die.component.css']
})
export class RollADieComponent implements OnInit {

  constructor(
    public diceRollingSvc: DiceRollingService
  ) { }

  ngOnInit(): void {
  }

  rollResult = 0;

  roll = () => {
    this.rollResult = Math.floor(Math.random() * Number(this.sideCount)) + 1; 
    this.dieRolled.emit({
      sides: this.sideCount
      , result: this.rollResult
    });
    this.diceRollingSvc.addRollHistory({
      sides: this.sideCount
      , result: this.rollResult
    });
  };

  @Input("side-count")
  sideCount = "";

  @Output("die-rolled")
  dieRolled = new EventEmitter<any>();
}
