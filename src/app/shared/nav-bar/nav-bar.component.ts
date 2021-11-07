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
    {site: 'přiběh', path: 'lore'},
    {site: 'registrace', path: 'sign-in'},
    {site: 'týmy', path: 'teams'},
    {site: 'autoři', path: 'authors'},
    {site: 'učet', path: 'team-profile'},
  ]
}
