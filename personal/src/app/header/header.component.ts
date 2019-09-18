import { Component, OnInit } from '@angular/core';
import { TimelineMax, TweenMax } from 'gsap'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // hamburger = document.querySelector('.menu');
  // hamburgerLines = document.querySelectorAll('.menu line');
  // navOpen = document.querySelector('.burger-open');
  // textLeft = document.querySelectorAll('.link-left a');

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
    return console.log('clicked');
   }

}
