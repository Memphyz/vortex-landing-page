import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
  public readonly items = [
    {
      icon: 'SacredSword',
      title: 'Sacred Sword',
      router: 'home'
    },
    {
      icon: 'History',
      title: 'História',
      router: 'history'
    },
    {
      icon: 'Character',
      title: 'Personagens',
      router: 'characters'
    },
    {
      icon: 'Union',
      title: 'Time Vortex',
      router: 'team',
      useUnderIcon: true
    },
    {
      icon: 'about',
      title: 'Inscrição antecipada',
      router: 'early-access'
    }
  ]

  public selected: any;

  constructor(private readonly route: Router, private readonly cd: ChangeDetectorRef) { cd.detach() }

  public ngAfterViewChecked(): void {
    const url = this.route.url.substring(1)
    this.selected = this.items.find(item => item.router === url);
    this.cd.detectChanges();

  }
}
