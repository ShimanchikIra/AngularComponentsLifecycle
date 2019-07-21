import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, Input,
  OnChanges,
  OnDestroy,
  OnInit } from '@angular/core';

export interface Skill {
  id: number;
  color: string;
}
export let skillsArr: Skill[] = [
  {id: 1, color: 'blue'},
  {id: 2, color: 'purple'},
  {id: 3, color: 'cyan'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy {
  name: string;
  totalValue: number;
  color: string;
  @Input() skills: Skill[];
  ngOnInit(): void {
    this.totalValue = 0;
    this.color = 'red';
    this.skills = skillsArr;
    console.log('%cDoCheck', `color: ${this.color}`);
  }
  onChanged(value: number): void {
    this.totalValue += value;
  }
  ngOnChanges() {
    console.log('%cOnChanges', `color: ${this.color}`);
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
