import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  template: `
    <app-activity [title]="activity.title"
                  [description]="activity.description"
                  [steps]="activity.steps"
                  [solution]="activity.solution"
                  [result]="buttonCounter">

      <button #button class="btn btn-primary">
        Clicked {{buttonCounter}} times
      </button>

    </app-activity>
  `,
})
export class Lesson2activity6Component implements OnInit {
  @Input() public activity;

  // Get a reference to the elements using their #tag
  @ViewChild('button') buttonRef: ElementRef;

  // Store a reference to the actual nativeElement
  private button: HTMLElement;

  // Button Observables
  private button$: Observable<Event>;

  // The counters for each of the buttons
  public buttonCounter = 0;

  // Maximum number of events
  public takeUntilAmount = 5;

  ngOnInit() {
    // Assign the nativeElements.
    this.button = this.buttonRef.nativeElement;

    // Set up the fromEvent Observables
    this.button$ = fromEvent(this.button, 'click');

    // Run the activities
    this.solution();
  }

  /**
   * Solution for Activity
   */
  solution() {
    const button6stop = new Subject();
    this.button$
      .pipe(takeUntil(button6stop))
      .subscribe(() => {
        if (this.buttonCounter + 1 === this.takeUntilAmount) {
          button6stop.next();
        }
        this.buttonCounter++;
      });
  }
}
