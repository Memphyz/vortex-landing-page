import { CharactersComponent } from './components/characters/characters.component';
import { EarlyAcessComponent } from './components/early-acess/early-acess.component';
import { HistoryComponent } from './components/history/history.component';
import { HomeComponent } from './components/home/home.component';
import { TeamComponent } from './components/team/team.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '*',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'early-access',
    component: EarlyAcessComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
