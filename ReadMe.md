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

Pour afficher une variable sur le site web. Il suffit de taper ```{{ leNomDeLaVariable }}``` entre les balises d'un code html. Ex:

```html
<h1>{{title}}</h1>
```

va afficher le contenu de la variable title.

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
   constructor() { }

   block: boolean = false;
}
```

```html
<button [disabled]="block">Show</button>
```

## Event binding

Je vais vous montrer comment réagir dans votre code TypeScript aux événements venant du template HTML grace aux Event binding. on utilise les parenthèses ```()``` pour créer une liaison à un événement.

```typescript
export class AppComponent {
  constructor() { }

  click() {
    console.log('Button is pressed!');
   }
}
```

```html
<button (click)="click()">Show</button>
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

  constructor() { }
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

## Les directives

Les directives sont des instructions intégrées dans le DOM que vous utiliserez presque systématiquement quand vous créerez des applications Angular.

Quand Angular lit votre template et rencontre une directive qu'il reconnait, il suit les instructions correspondantes.  Vous pouvez créer vos propres directives

### Les directives: *ngIf

Un component auquel on ajoute la directive ```*ngIf="condition"``` ne s'affichera que si la condition est vrai, comme un ```if``` classique.

```html
<div *ngIf="show === true">
   <p>Hello</p>
</div>
```

### Les directives: *ngFor

Un component auquel on ajoute la directive ```*ngFor="let obj of myArray"``` itérera l'array ```myArray``` et affichera un component par objet ```obj```, comme un ```for``` classique.

```typescript
export class AppComponent {

  infoArray = [
    {
      phrase: 'LOL'
    },
    {
      phrase: 'DOMO'
    },
    {
      phrase: 'PTDR'
    }
  ];

  constructor() {}
}
```

```html
<div *ngFor="let info of infoArray">
   <p>{{info.phrase}}</p>
</div>
```

## Pipes

Les pipes prennent des données en input, les transforment, et puis affichent les données modifiées dans le DOM.

Il y a des pipes fournis avec Angular, et vous pouvez également créer vos propres pipes si vous en avez besoin.

### Pipes: date

Un pipe que l'on utilise très souvent est DatePipe , qui analyse des objets JS de type Date et qui les affiche d'une manière plus lisible que leur encodage de base.

Pour ajouter le DatePipe dans le template il suffit de mettre le caractère ```|```.

```typescript
export class AppComponent {
  lastUpdate = new Date();

  constructor() {}
}
```

```html
<p>Mis à jour : {{ lastUpdate | date }}</p>
<p>Mis à jour : {{ lastUpdate | date: 'short' }}</p>
<p>Mis à jour : {{ lastUpdate | date: 'yMMMMEEEEd' }}</p>
```

# Angular pour les débutants Partie 2

## Service

Dit très simplement, un service permet de centraliser des parties de votre code et des données qui sont utilisées par plusieurs parties de votre application ou de manière globale par l'application entière.  Les services permettent donc :

- de ne pas avoir le même code doublé ou triplé à différents niveaux de l'application - ça facilite donc la maintenance, la lisibilité et la stabilité du code ;

- de ne pas copier inutilement des données - si tout est centralisé, chaque partie de l'application aura accès aux mêmes informations, évitant beaucoup d'erreurs potentielles.

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() { }
}
```

### Injection et instances

Pour être utilisé dans l'application, un service doit être injecté.

```typescript
constructor(private auth: AuthService) {}
```

Le décorateur ```@Injectable()``` spécifie qu'Angular peut utiliser cette classe. Les métadonnées, providedIn: 'root', signifie que ```AuthService``` est visible dans toute l'application.

## Routing

L'un des énormes avantages d'utiliser Angular est de pouvoir créer des "single page application" (SPA).

Sur le Web, ces applications sont rapides et lisses : il n'y a qu'un seul chargement de page au début, et même si les données mettent parfois du temps à arriver, la sensation pour l'utilisateur est celle d'une application native.

Au lieu de charger une nouvelle page à chaque clic ou à chaque changement d'URL, on remplace le contenu ou une partie du contenu de la page : on modifie les components qui y sont affichés, ou le contenu de ces components.

On accomplit tout cela avec le "routing", où l'application lit le contenu de l'URL pour afficher le ou les components requis.

De Base Angular CLI vous propose de creer un routing si vous accepter vous devriez avoir un fichier nommé ```app-routing.module.ts```.

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

### Créez des routes

Voici un exemple de route normal:

```typescript
const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: '', component: HomeComponent }
];
```

Toutes les routes se mettront dans l'array routes.

Le path correspond au string qui viendra après le ```/``` dans l'URL. Donc le ```path: ''``` correspond sur votre serveur local à ```localhost:4200/```

### Afficher les routes

Maintenant que les routes sont enregistrées, il ne reste plus qu'à dire à Angular où vous souhaitez afficher les components dans le template lorsque l'utilisateur navigue vers la route en question.  On utilise la balise ```<router-outlet>```.

```html
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <router-outlet></router-outlet>
    </div>
  </div>
</div>
```

### Naviguez avec les routerLink

Afin que l'utilisateur puisse naviguer à l'intérieur de votre application, il est nécessaire de créer des liens ou des boutons qui naviguent vers les routes que vous avez créées.

Il suffit de retire l'attribut ```href``` et on le remplace par l'attribut ```routerLink```.

```html
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-collapse">
      <ul class="nav navbar-nav">
        <li><a routerLink="auth">Authentification</a></li>
      </ul>
    </div>
  </div>
</nav>
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <router-outlet></router-outlet>
    </div>
  </div>
</div>
```

On peut aussi ajouter ```routerLinkActive``` avec une classe css ensuite. Car elle ne s'applique qu'au lien du component réellement actif.

```html
<ul class="nav navbar-nav">
    <li routerLinkActive="active"><a routerLink="auth">Authentification</a></li>
</ul>
```

### Naviguez avec le Router

Autre facon de naviguez: le router. Pour cela, il faut injecter le ```Router``` (importé depuis ```@angular/router```) pour accéder à la méthode ```navigate()```.

La fonction navigate prend comme argument un array d'éléments (ce qui permet de créer des chemins à partir de variables, par exemple) qui, dans ce cas, n'a qu'un seul membre: le ```path``` souhaité.

```typescript
constructor(private authService: AuthService, private router: Router) { }

onSignIn() {
    this.authService.signIn().then(
      () => {
        console.log('Sign in successful!');
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['home']);
      }
    );
}
```

### Paramètres de routes

Imaginez qu'on souhaite pouvoir cliquer sur un appareil dans la liste d'appareils afin d'afficher une page avec plus d'informations sur cet appareil.

On peut imaginer un système de routing de type ```appareils/nom-de-l'appareil```.

```typescript
const appRoutes: Routes = [
  { path: 'appareils', component: AppareilViewComponent },
  { path: 'appareils/:id', component: SingleAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppareilViewComponent }
];
```

L'utilisation des deux-points ```:``` avant un fragment de route déclare ce fragment comme étant un paramètre.

Tous les chemins de type ```appareils/*``` seront renvoyés vers ```SingleAppareilComponent```.

### Redirection

Il peut y avoir des cas de figure où l'on souhaiterait rediriger un utilisateur, par exemple pour afficher une page 404 lorsqu'il entre une URL qui n'existe pas.

Vous allez ajouter la route "directe" vers cette page, ainsi qu'une route "wildcard", qui redirigera toute route inconnue vers la page d'erreur.

```typescript
const appRoutes: Routes = [
  { path: 'appareils', component: AppareilViewComponent },
  { path: 'appareils/:id', component: SingleAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppareilViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];
```

### Guards

Une guard est un service qu'Angular exécutera au moment où l'utilisateur essaye de naviguer vers la route sélectionnée.

Ce service implémente l'interface ```canActivate``` , et donc doit contenir une méthode du même nom qui prend les arguments ```ActivatedRouteSnapshot``` et ```RouterStateSnapshot``` (qui lui seront fournis par Angular au moment de l'exécution) et retourne une valeur booléenne, soit de manière synchrone (boolean), soit de manière asynchrone (sous forme de Promise ou d'Observable) :

```typescript
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

  }
}
```

```typescript
const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent },
  { path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppareilViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];
```
