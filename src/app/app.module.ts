import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AlbumsService } from './albums.service';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
  {path: '', component: MainComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AlbumsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
