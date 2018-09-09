import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';
import {  } from 'rxjs/operators';
import { lesson, activity1, activity2, activity3, activity4, activity5, activity6 } from './demo2.activities';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
})
export class Demo2Component implements OnInit {
  // Store the info about the activities
  public readonly lesson = lesson;
  public readonly activity1 = activity1;
  public readonly activity2 = activity2;
  public readonly activity3 = activity3;
  public readonly activity4 = activity4;
  public readonly activity5 = activity5;
  public readonly activity6 = activity6;

  // Get a reference to the elements using their #tag
  @ViewChild('button1') button1ref: ElementRef;
  @ViewChild('button2') button2ref: ElementRef;
  @ViewChild('button3') button3ref: ElementRef;
  @ViewChild('button5') button5ref: ElementRef;
  @ViewChild('button4') button4ref: ElementRef;
  @ViewChild('button6') button6ref: ElementRef;

  // Store a reference to the actual nativeElement
  private button1: HTMLElement;
  private button2: HTMLElement;
  private button3: HTMLElement;
  private button4: HTMLElement;
  private button5: HTMLElement;
  private button6: HTMLElement;

  // Button Observables
  private button1$: Observable<Event>;
  private button2$: Observable<Event>;
  private button3$: Observable<Event>;
  private button5$: Observable<Event>;
  private button4$: Observable<Event>;
  private button6$: Observable<Event>;

  // The counters for each of the buttons
  public counters: any = {
    button1: 0,
    button2: 0,
    button3: 0,
    button5: 0,
    button4: 0,
    button6: 0,
  };

  // Debounce time in ms
  public debounceDelay = 500;

  // Throttle duration in ms
  public throttleDelay = 1000;

  // Maximum number of events
  public takeUntilAmount = 5;

  // Number of events to skip
  public skipAmount = 5;

  // Click multiplier
  public multiplyAmount = 3;

  // Increase the button counter by a given number
  increaseCounter(button: string, inc: number = 1) {
    this.counters[button] = this.counters[button] + inc;
  }

  ngOnInit() {
    // Assign the nativeElements.
    this.button1 = this.button1ref.nativeElement;
    this.button2 = this.button2ref.nativeElement;
    this.button3 = this.button3ref.nativeElement;
    this.button5 = this.button5ref.nativeElement;
    this.button4 = this.button4ref.nativeElement;
    this.button6 = this.button6ref.nativeElement;

    // Set up the fromEvent Observables
    this.button1$ = fromEvent(this.button1, 'click');
    this.button2$ = fromEvent(this.button2, 'click');
    this.button3$ = fromEvent(this.button3, 'click');
    this.button4$ = fromEvent(this.button4, 'click');
    this.button5$ = fromEvent(this.button5, 'click');
    this.button6$ = fromEvent(this.button6, 'click');

    // Run the activities
    this.solution1();
    this.solution2();
    this.solution3();
    this.solution4();
    this.solution5();
    this.solution6();
  }

  /**
   * Solution for Activity 1
   */
  solution1() {

  }

  /**
   * Solution for Activity 2
   */
  solution2() {

  }

  /**
   * Solution for Activity 3
   */
  solution3() {

  }

  /**
   * Solution for Activity 4
   */
  solution4() {

  }

  /**
   * Solution for Excersice 1
   */
  solution5() {

  }

  /**
   * Solution for Excersice 2
   */
  solution6() {

  }

}
