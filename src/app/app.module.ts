import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HomeComponent } from './sites/home/home.component';
import { TeamsComponent } from './sites/teams/teams.component';
import { LoreComponent } from './sites/lore/lore.component';
import { GameInfoComponent } from './sites/game-info/game-info.component';
import { SignInFormComponent } from './sites/sign-in-form/sign-in-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    TeamsComponent,
    LoreComponent,
    GameInfoComponent,
    SignInFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
