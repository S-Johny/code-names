import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameInfoComponent } from './sites/game-info/game-info.component';
import { HomeComponent } from './sites/home/home.component';
import { LoreComponent } from './sites/lore/lore.component';
import { SignInFormComponent } from './sites/sign-in-form/sign-in-form.component';
import { TeamProfileComponent } from './sites/team-profile/team-profile.component';
import { TeamsComponent } from './sites/teams/teams.component';

const routes: Routes = [
  {
    path: 'lore',
    component: LoreComponent,
    data: { title: 'Lore' },
  },
  {
    path: 'game-info',
    component: GameInfoComponent,
    data: { title: 'Game Info' },
  },
  {
    path: 'team-profile',
    component: TeamProfileComponent,
    data: { title: 'Team Profile' },
  },
  {
    path: 'teams',
    component: TeamsComponent,
    data: { title: 'Teams' },
  },
  {
    path: 'sign-in',
    component: SignInFormComponent,
    data: { title: 'Sign In' },
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' },
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
