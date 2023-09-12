import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  name: string = 'Bulbasaur';
  attributesTypes: string[] = ['Fire', 'Rock'];

  constructor(private Service: PokemonService) {}

  ngOnInit(): void {
    this.Service.getPokemon('bulbasaur').subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
    });
  }
}
