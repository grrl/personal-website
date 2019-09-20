import { Component, Renderer2, ViewChild, ElementRef, AfterViewInit, OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{

  title = 'Deiziane Silva | Olá!';

  @ViewChild('cursor', {static: false}) cursor: ElementRef;
  @ViewChild('cursor2', {static: false}) cursor2: ElementRef;

  globalListenFunc: Function;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.globalListenFunc = this.renderer.listen('document', 'mousemove', e => {
      this.renderer.setStyle(this.cursor.nativeElement, 'left', e.clientX + 'px');
      this.renderer.setStyle(this.cursor.nativeElement, 'top', e.clientY + document.scrollingElement.scrollTop + 'px');
      this.renderer.setStyle(this.cursor2.nativeElement, 'left', e.clientX + 'px');
      this.renderer.setStyle(this.cursor2.nativeElement, 'top', e.clientY + document.scrollingElement.scrollTop + 'px');
    });
  }

}
