import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { } from 'rxjs/operators';

@Component({
  template: `
    <!-- The button that initiates the request -->
    <div class="my-3">
      <button (click)="solution()"
              class="btn btn-primary"
              [disabled]="loading">Get Random Gif</button>
    </div>

    <!-- Display the result if we have one -->
    <div *ngIf="result as result; else noresult">
      <img [attr.src]="result.images['original']['url']"
           alt="">
    </div>

    <!-- This template will be rendered when there is no result or when loading -->
    <ng-template #noresult>
      <app-loader [show]="loading"></app-loader>
      <div class="text-center"
           *ngIf="!loading && !result"> No result </div>
    </ng-template>
  `,
})
export class Activity1Component implements OnInit {
  public result: any;
  public loading = false;

  constructor(private service: DataService) { }

  ngOnInit() { }

  /**
   * Solution for Activity
   */
  solution() {

  }

}
