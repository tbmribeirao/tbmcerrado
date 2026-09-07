import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    standalone: false
})

export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openMenu(menuName : any) {
    const menu = document.querySelector(`#${menuName}`);
    menu?.classList.add('site-nav__overlay--open')
  }

  closeMenu(menuName : any){
    const menu = document.querySelector(`#${menuName}`);
    menu?.classList.remove('site-nav__overlay--open')
  }
}
