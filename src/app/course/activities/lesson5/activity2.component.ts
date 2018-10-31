import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  template: `    
    <input #input type="text" [class]="inputClass" [placeholder]="inputPlaceholder">
  `,
})
export class Activity2Component implements OnInit {
  public inputClass = 'form-control form-control-lg bg-secondary text-white';
  public inputPlaceholder = 'Enter your search query';

  @ViewChild('input') inputRef: ElementRef;

  private input: HTMLInputElement;

  private input$: Observable<Event>;

  private input$query: Observable<string>;


  private debounceDelay = 300;

  public result2: any = {
    value: '',
    query: '',
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
