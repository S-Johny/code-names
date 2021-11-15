import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HomeComponent } from './sites/home/home.component';
import { TeamsComponent } from './sites/teams/teams.component';
import { LoreComponent } from './sites/lore/lore.component';
import { SignInFormComponent } from './sites/sign-in-form/sign-in-form.component';
import { TeamProfileComponent } from './sites/team-profile/team-profile.component';
import { InputComponent } from './shared/input/input.component';
import { environment } from 'src/environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AuthorsComponent } from './sites/authors/authors.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AuthService } from './shared/auth.service';
import { DatabaseService } from './shared/database.service';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    TeamsComponent,
    LoreComponent,
    SignInFormComponent,
    TeamProfileComponent,
    InputComponent,
    AuthorsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  providers: [
    AuthService,
    DatabaseService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
