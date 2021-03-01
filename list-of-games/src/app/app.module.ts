import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JeuVideoComponent } from './jeu-video/jeu-video.component';
import { ListJeuVideoComponent } from './list-jeu-video/list-jeu-video.component';

@NgModule({
  declarations: [
    AppComponent,
    JeuVideoComponent,
    ListJeuVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
