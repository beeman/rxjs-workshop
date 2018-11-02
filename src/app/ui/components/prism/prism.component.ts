// This component is copied from https://github.com/sgbj/angular-prism/blob/master/src/prism.component.ts
// Which is MIT licensed by Scott Batary https://github.com/sgbj
// Decided to inline this file as the package is not compatible with doing `ng update` from v6 to v7
// TODO: Find third party Angular library for Prism

import { AfterContentInit, AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, ViewChild } from '@angular/core';

import 'prismjs/prism';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-markup';

declare var Prism: any;

@Component({
  selector: 'app-prism',
  template: `
    <div hidden #raw style="display: none">
      <ng-content></ng-content>
    </div>
    <pre><code class="language-{{language}}" #code></code></pre>
  `
})
export class PrismComponent implements AfterViewInit, AfterContentInit, OnChanges, OnDestroy {
  private observer: MutationObserver | null;

  @Input() language: string;
  @Input() code: string;

  @ViewChild('raw') rawViewChild: ElementRef;
  @ViewChild('code') codeViewChild: ElementRef;

  constructor(private elementRef: ElementRef) {}

  onContentChanged() {
    this.codeViewChild.nativeElement.innerHTML = this.code
      ? this.encodeEntities(this.code)
      : this.rawViewChild.nativeElement.innerHTML;

    Prism.highlightElement(this.codeViewChild.nativeElement);
  }

  ngAfterViewInit() {
    this.onContentChanged();
  }

  ngOnChanges() {
    this.onContentChanged();
  }

  ngAfterContentInit() {
    this.observer = new MutationObserver(this.onContentChanged.bind(this));

    this.observer.observe(this.rawViewChild.nativeElement, {
      characterData: true,
      childList: true,
      subtree: true
    });
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  encodeEntities(value) {
    return value
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
}
