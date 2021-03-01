# Angular pour les débutants Partie 1

[Angular](https://angular.io/) est devenu très populaire au cours des dernières années. Vous pouvez utiliser ce framework JavaScript open-source pour créer des applications web et mobiles. Angular est géré par Google donc il y a peu de chances qu’il disparaisse, et l’équipe de développement du framework est excellente

Le but de cette série est de couvrir les notions de bases du framework Angular tout en créant une application très simple. Angular est écrit en TypeScript, il est donc logique que vous écriviez votre propre code en TypeScript.

Vous n'avez pas besoin de s'inquiéter si vous n'avez jamais utilisé TypeScript auparavant. TypeScript est un sur-ensemble de JavaScript qui est justement transcompilé en JavaScript pour être compréhensible par les navigateurs. Il ajoute des fonctionnalités extrêmement utiles, comme, entre autres :

- le typage strict, qui permet de s’assurer qu’une variable ou une valeur passée vers ou retournée par une fonction soit du type prévu ;

- les fonctions dites lambda ou arrow, permettant un code plus lisible et donc plus simple à maintenir ;

- les classes et interfaces, permettant de coder de manière beaucoup plus modulaire et robuste.

## Installation

Vous devez installer les outils suivants si vous ne les avez pas déjà sur votre machine :

### NODE.JS / NPM

Téléchargez et installez la dernière version de [Node.js](https://nodejs.org/en/download/). Le gestionnaire de paquets node npm s’installera avec Node.js.

### ANGULAR/CLI

Vous allez maintenant installer le CLI d’Angular avec la commande suivante :

```sh
npm install -g @angular/cli
```

À partir de là, la commande ```ng``` est disponible depuis la ligne de commandes.

## Créez un projet

Maintenant, vous pouvez créer une nouvelle application Angular en exécutant la commande suivante dans votre terminale.

```sh
ng new first-app
```

Ensuite, allez dans le répertoire du projet et lancez votre application sur un serveur de développement.

```sh
cd first-app
ng serve
```

Ensuite pour ouvrir votre application dans le navigateur allez à l'addresse <http://localhost:4200/>.

### Conseil

Quand vous copier / transferer une application angular il ne faut pas prendre le dossier node_modules.

Et quand vous recuperer une application angular executez la commande

```sh
npm install
```

Cela va vous installez toutes les dépendances. Puis vous pourrez lancez l'application.

## Angular components

La page que vous voyez est le shell de l'application. Le shell est contrôlé par un Angular components nommé AppComponent.

Les components sont les éléments fondamentaux des applications Angular. Ils affichent des données, écoutent les inputs de l'utilisateur et effectuent des actions en fonction de ces inputs.

### Apportez des modifications à l'application

Ouvrez le projet dans votre éditeur ou IDE préféré et accédez au dossier src / app pour apporter des modifications à l'application de démarrage.

Vous trouverez l'implémentation du shell AppComponent réparti sur trois fichiers:

- app.component.ts - le code du component, écrit en TypeScript.
- app.component.html - le modèle de component, écrit en HTML.
- app.component.css: styles CSS privés du component.

## Afficher une variable

Pour afficher une variable sur le site web. Il suffit de taper ```{{ leNomDeLaVariable }}``` entre les balises d'un code html. Ex: ```<h1>{{title}}</h1>``` va afficher le contenu de la variable title.

## Créez un component

Pour créer un nouveau component à l'aide du CLI d'Angular. Vous-devez depuis le dossier principal de votre projet, executez la commande suivante :

```sh
ng generate component leNomDuComponent
```

## Affichez un component

Il suffit de trouver le nom de la balise associer a votre component.
Pour la trouver allez dans le .ts du component que vous avez créez.

```typescript
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
```

Le nom de la balise se trouve dans le selector.
Ex: ```<app-heroes></app-heroes>``` affichera le component heroes.

## Créez une interface

Cela marche de la meme facon que les autres languages objets.
Pour créez une interface il suffit de taper :

```typescript
export interface leNomDeLInterface {}
```

Ex:

```typescript
export interface Hero {
  id: number;
  name: string;
}
```

## Property binding

La liaison par propriété ou "property binding" est une autre façon de créer de la communication dynamique entre votre TypeScript et votre template : plutôt qu'afficher simplement le contenu d'une variable, vous pouvez modifier dynamiquement les propriétés d'un élément du DOM en fonction de données dans votre TypeScript.

Afin de lier cette propriété au TypeScript, il faut le mettre entre crochets ```[]``` et l'associer à la variable ainsi :

```typescript
export class AppComponent {
  isAuth: boolean = false;
}
```

```html
<button [disabled]="!isAuth">Show</button>
```

## Event binding

Je vais vous montrer comment réagir dans votre code TypeScript aux événements venant du template HTML grace aux Event binding. on utilise les parenthèses ```()``` pour créer une liaison à un événement.

```typescript
click() {
    console.log('Button is pressed!');
}
```

```html
<button [disabled]="!isAuth"
        (click)="click()">Show</button>
```

## Two-way binding

La liaison à double sens (ou two-way binding) utilise la liaison par propriété et la liaison par événement en même temps.

On l'utilise, par exemple, pour les formulaires, afin de pouvoir déclarer et de récupérer le contenu des champs. Il vous faut importer ```FormsModule``` depuis ```@angular/forms``` dans le fichier AppModule et l'ajoutez à l'array  imports.

```typescript
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: []
})
export class AppModule { }
```

Pour utilisez le two-way binding il suffit de mettre des crochets et des parenthèses ```[()]```

```typescript
export class AppComponent {
  name: string = '';
}
```

```html
<input type="text" class="form-control" [(ngModel)]="name">
```

## Propriétés personnalisées

Il est possible de créer des propriétés personnalisées dans un component afin de pouvoir lui transmettre des données depuis l'extérieur, par exemple passer des données d'un component Parent à celui d'un component Enfant.

Pour ce faire, il faut utiliser le décorateur ```@Input()``` en remplaçant la déclaration de la variable.
Ex:

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  @Input() heroesName: string;

  constructor() { }
}
```

Ce décorateur, en effet, crée une propriété ```heroesName``` qu'on peut fixer depuis la balise  ```<app-heroes>``` :

```html
<app-heroes heroesName="Superman"></app-heroes>
<app-heroes heroesName="Spiderman"></app-heroes>
<app-heroes heroesName="Hulk"></app-heroes>
```

## Les directives: *ngIf


