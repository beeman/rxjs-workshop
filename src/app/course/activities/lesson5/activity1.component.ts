import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { } from 'rxjs/operators';

@Component({
  template: `
    <input #input type="text" [class]="inputClass" [placeholder]="inputPlaceholder">
    <app-result [result]="result"></app-result>
  `,
})
export class Activity1Component implements OnInit {
  public inputClass = 'form-control form-control-lg bg-secondary text-white';
  public inputPlaceholder = 'Enter your search query';

  @ViewChild('input') inputRef: ElementRef;

  private input: HTMLInputElement;

  private input$: Observable<Event>;

  public result: any = {
    value: '',
  };

  ngOnInit() {
    this.input = this.inputRef.nativeElement;

    this.input$ = fromEvent(this.input, 'keyup');

    this.solution();
  }

  /**
   * Solution for Activity
   *
   */
  solution() {

  }

}
