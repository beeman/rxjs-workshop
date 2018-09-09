import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { DataService } from '../../services/data.service';
import { activity1, activity2, activity3, lesson } from './demo5.activities';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
})
export class Demo5Component implements OnInit {
  public readonly lesson = lesson;
  public readonly activity1 = activity1;
  public readonly activity2 = activity2;
  public readonly activity3 = activity3;

  public inputClass = 'form-control form-control-lg bg-secondary text-white';
  public inputPlaceholder = 'Enter your search query';

  @ViewChild('input1') input1ref: ElementRef;
  @ViewChild('input2') input2ref: ElementRef;
  @ViewChild('input3') input3ref: ElementRef;

  private input1: HTMLInputElement;
  private input2: HTMLInputElement;
  private input3: HTMLInputElement;

  private input1$: Observable<Event>;
  private input2$: Observable<Event>;
  private input3$: Observable<Event>;

  private input2$query: Observable<string>;
  private input3$query: Observable<string>;

  private debounceDelay = 300;

  public result1: any = {
    value: '',
  };

  public result2: any = {
    value: '',
    query: '',
  };

  public result3: any = {
    query: '',
  };


  constructor(private data: DataService) {
  }

  /**
   * Method to handle the search query and setting the loading indicator
   */
  search3(query) {
    this.result3.loading = true;
    return this.data.getCountriesByName(query)
      .pipe(
        tap(() => this.result3.loading = false),
      );
  }

  ngOnInit() {
    this.input1 = this.input1ref.nativeElement;
    this.input2 = this.input2ref.nativeElement;
    this.input3 = this.input3ref.nativeElement;

    this.input1$ = fromEvent(this.input1, 'keyup');
    this.input2$ = fromEvent(this.input2, 'keyup');
    this.input3$ = fromEvent(this.input3, 'keyup');

    this.solution1();
    this.solution2();
    this.solution3();
  }

  /**
   * Solution for Activity 1
   *
   */
  solution1() {

  }

  /**
   * Solution for Activity 2
   *
   */
  solution2() {

  }


  /**
   * Solution for Activity 3
   *
   */
  solution3() {

  }

}
