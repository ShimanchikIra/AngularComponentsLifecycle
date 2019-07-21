import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy {
  @Input() userName: string;
  @Input() skill: number;
  @Input() color: string;
  @Output() onChangedValue = new EventEmitter<number>();
  value: number;

  constructor() {
    this.value = 0;
  }

  ngOnInit() {
    console.log('%cOnChanges', `color: ${this.color}`);
  }
  plus(): void {
    this.value++;
    this.onChangedValue.emit(1);
  }
  minus(): void {
    if (this.value > 0) {
      this.value--;
      this.onChangedValue.emit(-1);
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    // tslint:disable-next-line:forin
    for (const propName in changes) {
      const change = changes[propName];
      const cur  = JSON.stringify(change.currentValue);
      const prev = JSON.stringify(change.previousValue);
      console.log(`%cOnChanges: ${propName}: currentValue = ${cur}, previousValue = ${prev}`, `color: ${this.color}`);
    }
    // console.log('%cOnChanges', `color: ${this.color}`);
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
