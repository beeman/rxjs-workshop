import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DataService } from '../../services/data.service';

@Component({
  template: `
    <input #input type="text" [class]="inputClass" [placeholder]="inputPlaceholder">

    <div *ngIf="result.error as error"><pre>{{error | json}}</pre></div>

    <div *ngIf="result.result as result; else noresult">
      <div *ngFor="let item of result" class="my-3">
        <app-country-card [country]="item"></app-country-card>
      </div>
    </div>

    <ng-template #noresult>
      <app-loader [show]="result['loading']"></app-loader>
      <div class="text-center" *ngIf="!result['loading'] && !result"> No result </div>
    </ng-template>
  `,
})
export class Activity3Component implements OnInit {
  public inputClass = 'form-control form-control-lg bg-secondary text-white';
  public inputPlaceholder = 'Enter your search query';

  @ViewChild('input') inputref: ElementRef;

  private input: HTMLInputElement;

  private input$: Observable<Event>;

  private input$query: Observable<string>;

  private debounceDelay = 300;

  public result: any = {
    query: '',
  };


  constructor(private data: DataService) {
  }

  /**
   * Method to handle the search query and setting the loading indicator
   */
  search(query) {
    this.result.loading = true;
    return this.data.getCountriesByName(query)
      .pipe(
        tap(() => this.result.loading = false),
      );
  }

  ngOnInit() {
    this.input = this.inputref.nativeElement;

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
