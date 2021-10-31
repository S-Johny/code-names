import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent {

  menuItem: {site: string; path: string}[] = [
    {site: 'home', path: 'home'},
    {site: 'přihláška', path: 'sign-in'},
    {site: 'pro hrače', path: 'game-info'},
    {site: 'týmy', path: 'teams'},
    {site: 'přiběh', path: 'lore'},
  ]
}
