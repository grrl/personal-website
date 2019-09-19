import { Component, Renderer2, ViewChild, ElementRef, AfterViewInit, OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{

  title = 'Deiziane Silva | Olá!';

  @ViewChild('pacman', {static: false}) pacman: ElementRef;

  globalListenFunc: Function;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.globalListenFunc = this.renderer.listen('document', 'mousemove', e => {
      console.log(e);
      this.renderer.setStyle(this.pacman.nativeElement, 'left', e.clientX + 'px');
      this.renderer.setStyle(this.pacman.nativeElement, 'top', e.clientY + 'px');
    });
  }
}
