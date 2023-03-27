import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pokedex, PokeInfo} from "./pokemon";

//api pokemon
const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
const url2 = 'https://pokeapi.co/api/v2/pokemon/';

@Injectable({
  providedIn: 'root'
})
export class PokemonAPIService {

  constructor( private http: HttpClient ) { }

  getPokemons(): Observable<Pokedex> {
    return this.http.get<Pokedex>(url);
  }

  getPokeInfo(id: string): Observable<PokeInfo> {
    return this.http.get<PokeInfo>(url2 + id + '/');
  }
}
