import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  public readonly team = [
    {
      name: 'Brenda Aryelle Silva',
      activities: ['Game designer',
        'Líder do time de Arts',
        'Map e level maker',
        'Roteirista',
        'Artista']
    },
    {
      name: 'Felipe Moresqui',
      activities: ['Game designer',
        'Game designer',
        'Map e level maker',
        'Roteirista',
        'Artista']
    },
    {
      name: 'Kaue Alves Pereira',
      activities: ['Desenvolvedor / Programador de jogos',
        'Game tester']
    },
    {
      name: 'Lucas Alves Ribeiro',
      activities: ['Gerente do projeto',
        'Desenvolvedor Web']
    },
    {
      name: 'Pedro Dalla de Oliveira',
      activities: ['Desenvolvedor / Programador de jogos',
        'Game tester', 'Programador de jogos mobile']
    },
    {
      name: 'Vinicius Zapalá dos Santos',
      activities: [
        'Gerente do projeto',
        'Líder do time de programação',
        'UX Designer',
        'Web Designer',
        'Roteirista']
    },
  ]
}
