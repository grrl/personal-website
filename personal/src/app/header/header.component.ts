import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TimelineMax, TweenMax } from 'gsap'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('menu', {static: false}) menuElement: ElementRef;
  @ViewChild('frstbar', {static: false}) firstBar: ElementRef;
  @ViewChild('scndbar', {static: false}) secondBar: ElementRef;
  @ViewChild('thrdbar', {static: false}) thirdBar: ElementRef;

  menu = new TimelineMax({paused: true, reversed: true});

  constructor() { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.menu.to('.burger-open', 0.5, {y: 0}, 0);
  }

  menuClick() {
    this.menu.reversed() ? this.menu.play() : this.menu.reverse();
    this.menu.reversed() ? this.close() : this.open();
   }

  open() {
    this.menuElement.nativeElement.classList.add('open');
    this.secondBar.nativeElement.setAttribute('y1', '31.5');
    this.secondBar.nativeElement.setAttribute('y2', '1.5');
    this.firstBar.nativeElement.setAttribute('y2', '31.5');
    
    this.secondBar.nativeElement.setAttribute('x2', '33');
    this.firstBar.nativeElement.setAttribute('x2', '33');

  }

  close() {
    this.menuElement.nativeElement.classList.remove('open');
    this.secondBar.nativeElement.setAttribute('y1', '11.5');
    this.secondBar.nativeElement.setAttribute('y2', '11.5');
    this.firstBar.nativeElement.setAttribute('y2', '1.5');

    this.secondBar.nativeElement.setAttribute('x2', '43');
    this.firstBar.nativeElement.setAttribute('x2', '43');
  }
}
