import { Component } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {

  public readonly characters = [
    {
      title: 'Eva Marie',
      desc: '<p>Ensinada e treinada para ser uma grande guerreira e proteger a espada sagrada desde criança</p><p>Herdou a espada sagrada de seu pai, um grande guerreiro que morreu pelo reino;</p>',
      pic: 'warrior'
    },
    {
      title: 'Exercito de mortos-vivos',
      desc: '<p>Fruto da magia das trevas;</p><p>Levantados para lutar mais uma vez mesmo contra sua vontade;</p><br>Formando boa parte do exercito do Feitiçeiro da morte;',
      pic: 'zombie'
    },
    {
      title: 'Carniceiros da morte',
      desc: '<p>Homunculus, carncieiros, se você ver um desse corra!</p><p>Seres criados a partir da  alquimia do Feitiçeiro da morte;</p><br>Carniceiro são olhos e ouvidos do feitiçeiro da morte;',
      pic: 'butcher-of-death'
    },
    {
      title: 'Feiticeiro da Morte',
      desc: '<p>Sua história é desconhecida;</p><p>Só pode ser ferido com a espada sagrada;</p><p>Mestre das magias das trevas;</p><p>Pretende dominar todos os reinos;</p>',
      pic: 'sorcerer-of-death'
    },
  ]

}
