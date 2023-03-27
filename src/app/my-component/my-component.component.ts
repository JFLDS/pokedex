import { Component, OnInit } from '@angular/core';
import {PokeInfo, Pokemon} from "../pokemon";
import {PokemonAPIService} from "../pokemon-api.service";
import {PokeShareInfoService} from "../poke-share-info.service";

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokemonAPIService]
})
export class MyComponentComponent {
  //Attributs
  id: string = '';
  idPokemonSelect: string = '';
  searchPokemon: string = '';
  selectedPokemon: Pokemon | null = null;
  pokeInfo: PokeInfo | undefined;

  totalDisplayed: number = 32; //nombre de case d'affiché par défaut
  displayedPokemons: Pokemon[] = []; //liste des pokemons affiché

  pokemons: Pokemon[] = []; //liste des pokemons

  //Constructeur
  constructor(private api: PokemonAPIService, private share: PokeShareInfoService) {
    //On remplit la liste 'pokemons'
    /*this.pokemons.push(
      new Pokemon('1', 'Bulbizarre'),
      new Pokemon('2', 'Herbizarre'),
      new Pokemon('3', 'Florizarre'),
      new Pokemon('4', 'Salamèche'),
      new Pokemon('5', 'Reptincel'),
      new Pokemon('6', 'Dracaufeu')
    )*/
  }

  /* Ici on remplit la table de pokemon à les des données de l'api */
  ngOnInit(): void {
    this.api.getPokemons().subscribe(
      (data) => {
        data.results.forEach((p, id) => {
          if(id <= 1007){
            this.pokemons.push(new Pokemon((''+ (id + 1)), p.name, p.url));
          }
        });
        //on remplie la table d'affichage
        this.displayedPokemons = this.pokemons.slice(0, this.totalDisplayed);
      }
    );
  }

  /* On récupère les informations du pokemon selectionné */
  go(): void {
    // this.share.setValue(this.idPokemonSelect);
    if(this.idPokemonSelect != null){
      this.api.getPokeInfo(this.idPokemonSelect).subscribe((data) => {
          this.pokeInfo = data;
          this.share.setValue(this.idPokemonSelect);
      });
    }
  }

  //pour afficher la page des détails
  showDetails(p: Pokemon): void {
    this.selectedPokemon = p;
    this.api.getPokeInfo(p.getId()).subscribe(pokeInfo => this.pokeInfo = pokeInfo);
  }

  //pour refermer la page des détails
  hideDetails(): void {
    this.selectedPokemon = null;
  }

  //On ajoute 32 cases supplémentaire à l'affichage
  showMore():void {
    this.totalDisplayed += 32;
    this.displayedPokemons = this.pokemons.slice(0, this.totalDisplayed);
  }

}
