import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas',
  template: `
    <canvas #canvas></canvas>
  `,
  styles: [`
    canvas {
      width: 100%;
      height: 500px;
      background: #333;
    }
  `],
})
export class CanvasComponent implements OnInit {
  @ViewChild('canvas') canvas: ElementRef;

  @Input() public lineWidth = 70;

  public element: HTMLCanvasElement;
  public context: CanvasRenderingContext2D;
  public colorHue = 0;

  ngOnInit() {
    this.initCanvas();
  }

  initCanvas() {
    this.element = this.canvas.nativeElement;
    this.element.width = this.element.clientWidth;
    this.element.height = this.element.clientHeight;

    this.context = this.element.getContext('2d');
    this.context.lineJoin = 'round';
    this.context.lineCap = 'round';
  }

  public paintCanvas({layerX, layerY}: MouseEvent) {
    this.colorHue++;

    this.context.lineWidth = this.lineWidth;

    this.context.strokeStyle = `hsl(${this.colorHue}, 100%, 60%)`;

    this.context.beginPath();

    this.context.lineTo(layerX, layerY);

    this.context.stroke();
  }

}
