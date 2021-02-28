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

## Angular components

La page que vous voyez est le shell de l'application. Le shell est contrôlé par un Angular components nommé AppComponent.

Les components sont les éléments fondamentaux des applications Angular. Ils affichent des données, écoutent les inputs de l'utilisateur et effectuent des actions en fonction de ces entrées.

### Apportez des modifications à l'application

Ouvrez le projet dans votre éditeur ou IDE préféré et accédez au dossier src / app pour apporter des modifications à l'application de démarrage.

Vous trouverez l'implémentation du shell AppComponent réparti sur trois fichiers:

- app.component.ts - le code du component, écrit en TypeScript.
- app.component.html - le modèle de component, écrit en HTML.
- app.component.css: styles CSS privés du component.
