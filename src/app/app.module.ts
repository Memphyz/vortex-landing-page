import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './components/characters/characters.component';
import { EarlyAcessComponent } from './components/early-acess/early-acess.component';
import { HistoryComponent } from './components/history/history.component';
import { HomeComponent } from './components/home/home.component';
import { TeamComponent } from './components/team/team.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoryComponent,
    CharactersComponent,
    TeamComponent,
    EarlyAcessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      autoDismiss: false,
      closeButton: false,
      newestOnTop: true,
      disableTimeOut: false,
      countDuplicates: false,
      easeTime: 300,
      enableHtml: false,
      preventDuplicates: true,
      timeOut: 5000,
      progressBar: true,
      progressAnimation: 'decreasing',
      tapToDismiss: true,
    }),
    CommonModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
