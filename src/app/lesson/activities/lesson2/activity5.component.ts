import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { skip } from 'rxjs/operators';

@Component({
  template: `
    <button #button class="btn btn-primary">
      Clicked {{buttonCounter}} times
    </button>
  `,
})
export class Activity5Component implements OnInit {
  // Get a reference to the elements using the #tag
  @ViewChild('button') buttonRef: ElementRef;

  // Store a reference to the nativeElement
  private button: HTMLElement;

  // Button Observable
  private button$: Observable<Event>;

  // The counters for the button
  public buttonCounter = 0;

  // Number of events to skip
  public skipAmount = 5;

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
    this.button$
      .pipe(skip(this.skipAmount))
      .subscribe(() => this.buttonCounter++);
  }
}
