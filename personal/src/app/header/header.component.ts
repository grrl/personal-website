import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    const iconMenu = document.querySelector('.menu-burguer');

    iconMenu.addEventListener('click', () => {
      if (iconMenu.classList.contains('open')) {
        iconMenu.classList.remove('open');
      } else {
        iconMenu.classList.add('open');
      }
    }, false);
  }

}
