import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HomeComponent } from './sites/home/home.component';
import { TeamsComponent } from './sites/teams/teams.component';
import { LoreComponent } from './sites/lore/lore.component';
import { SignInFormComponent } from './sites/sign-in-form/sign-in-form.component';
import { LogInFormComponent } from './sites/log-in-form/log-in-form.component';
import { TeamProfileComponent } from './sites/team-profile/team-profile.component';
import { InputComponent } from './shared/input/input.component';
import { environment } from 'src/environments/environment';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AuthorsComponent } from './sites/authors/authors.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    TeamsComponent,
    LoreComponent,
    SignInFormComponent,
    LogInFormComponent,
    TeamProfileComponent,
    InputComponent,
    AuthorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
