# Pokedex

Pokedex est une application d'outil de recherche sur les Pokémon, généré par [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Utilisation

Exécutez 'ng serve' sur un terminal de commande pour lancer le serveur. Aller sur le site http://localhost:4200/ pour visualiser l'application.

## Fonctionnalités

- Recherche d'un Pokemon par son nom ou son ID.
- Liste triée par ordre croissant des ID des Pokémons.
- Affichage sous forme de grid (32 Pokemons d'affichés).
- Bouton "Show More" pour afficher 32 Pokemons supplémentaires.
- Chaque case est cliquable et affiche la fiche détail du pokemon (type, stats et abilitées).  

## Developpement

La modification de la pipe avec la fonction : ``transform(value: any[], property?: string, searchString?: string): any {}`` a été assez difficile à écrire car cette fonction nous avait été donné à l'origine, il fallait donc se l'approprier et la comprendre afin de pouvoir rajouter des contraintre au filtre.
Nous avons rencontré des difficultés lors de l'ajout des images car nous voulions dans un premier temps utiliser l'url fournit par l'api avec le type sprites, or il aurait fallu utiliser pokeInfo(idPokemonSelect). Cela n'était donc pas possible vu qu'il fallait afficher les images sans avoir selectionné de Pokemon.
Nous avons donc utilisé l'url sous cette forme: ``[src]="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ pokemon.getId() + '.png'"``.

## Auteurs

Alexandre **CHAPLAIS**, Jordan **FONSECA**.
