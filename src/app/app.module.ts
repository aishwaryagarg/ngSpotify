import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { homeComponent } from './home.component';
import { dashboardComponent } from './dashboard.component';
import { artistComponent } from './artist.component';
import { albumComponent } from './album.component';

const appRoutes: Routes = [
  { path: 'home', component: homeComponent },
  { path: 'dashboard', component: dashboardComponent },
  { path: 'artist/:id', component: artistComponent },  
  { path: 'album/:id', component: albumComponent },  
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    homeComponent,
    dashboardComponent,
    artistComponent,
    albumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
