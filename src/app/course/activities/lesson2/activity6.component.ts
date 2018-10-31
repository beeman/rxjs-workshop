import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';
import { } from 'rxjs/operators';

@Component({
  template: `
    <button #button class="btn btn-primary">
      Clicked {{buttonCounter}} times
    </button>
  `,
})
export class Activity6Component implements OnInit {
  // Get a reference to the elements using the #tag
  @ViewChild('button') buttonRef: ElementRef;

  // Store a reference to the nativeElement
  private button: HTMLElement;

  // Button Observable
  private button$: Observable<Event>;

  // The counters for the button
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

  }
}
