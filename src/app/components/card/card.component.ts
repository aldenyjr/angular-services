import { Component, OnInit } from '@angular/core';
import { pokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  pokemon: pokemonData = {
    id: 0,
    name: '',
    sprites: {
      front_default: '',
      other: { dream_world: { front_default: '' } },
    },
    types: [],
  };

  constructor(private Service: PokemonService) {}

  ngOnInit(): void {
    this.getPokemon('pikachu');
  }

  getPokemon(searchName: string) {
    this.Service.getPokemon(searchName).subscribe({
      next: (res) => {
        this.pokemon = {
          id: res.id,
          name: res.name,
          sprites: {
            front_default: res.sprites.front_default,
            other: {
              dream_world: {
                front_default: res.sprites.other.dream_world.front_default,
              },
            },
          },
          types: res.types,
        };
      },
    });
  }
}
