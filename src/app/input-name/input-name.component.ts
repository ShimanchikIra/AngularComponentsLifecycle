import {
  Component, EventEmitter, Input, OnInit, Output,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges
} from '@angular/core';


@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrls: ['./input-name.component.scss']
})
export class InputNameComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy {

  color: string;
  @Input() userName: string;
  @Output() userNameChange = new EventEmitter<string>();
  onNameChange(model: string) {
    this.userName = model;
    this.userNameChange.emit(model);
  }
  constructor() {
    this.color = 'green';
  }
  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const change = changes[propName];
      const cur  = JSON.stringify(change.currentValue);
      const prev = JSON.stringify(change.previousValue);
      console.log(`%cOnChanges: ${propName}: currentValue = ${cur}, previousValue = ${prev}`, `color: ${this.color}`);
    }
  }

  ngDoCheck() {
    console.log('%cDoCheck', `color: ${this.color}`);
  }

  ngAfterContentInit() {
    console.log('%cAfterContentInit', `color: ${this.color}`);
  }

  ngAfterContentChecked() {
    console.log('%cAfterContentCheck', `color: ${this.color}`);
  }
  ngAfterViewInit() {
    console.log('%cAfterViewInit', `color: ${this.color}`);
  }

  ngAfterViewChecked() {
    console.log('%cAfterViewCheck', `color: ${this.color}`);
  }

  ngOnDestroy() {
    console.log('%cOnDestroy', `color: ${this.color}`);
  }

}
