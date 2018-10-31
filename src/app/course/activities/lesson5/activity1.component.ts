import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { } from 'rxjs/operators';

@Component({
  template: `
    <input #input1 type="text" [class]="inputClass" [placeholder]="inputPlaceholder">
  `,
})
export class Activity1Component implements OnInit {
  public inputClass = 'form-control form-control-lg bg-secondary text-white';
  public inputPlaceholder = 'Enter your search query';

  @ViewChild('input1') input1ref: ElementRef;

  private input1: HTMLInputElement;

  private input1$: Observable<Event>;

  private debounceDelay = 300;

  public result1: any = {
    value: '',
  };

  ngOnInit() {
    this.input1 = this.input1ref.nativeElement;

    this.input1$ = fromEvent(this.input1, 'keyup');

    this.solution();
  }

  /**
   * Solution for Activity
   *
   */
  solution() {

  }

}
