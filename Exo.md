# List of games

Ce didacticiel List of games vous montre comment configurer votre environnement de développement local et développer une application à l'aide de l'outil Angular CLI, et fournit une introduction aux principes de base d'Angular.

L'application List of games que vous créez aide une agence de review de jeux vidéos. L'application terminée acquiert et affiche une liste de jeux, modifie les détails d'un jeu sélectionné et navigue entre différentes vues de données des jeux.

## Jeu vidéo Editable

### Créez un nouveau projet

- Configurez votre environnement
- Créer un nouvel espace de travail et une première application
- Lancée l'application

### Créez le jeux vidéos component

- Créez le jeux vidéos component
- Créer une propriété jeu vidéo pour le nom du jeu
- Afficher cette propriété

### Afficher le jeux vidéos component

Afficher le jeux vidéos component dans le AppComponent

### Créez une interface jeu vidéo

Créez une interface jeu vidéo contenant:

- id: number
- nom: string
- note: number

### Afficher l'objet jeu vidéo

- Afficher l'objet jeu vidéo dans le component jeu vidéo
- Mettre le nom du jeu vidéo en majuscule grace a un pipe

### Editez le jeu vidéo

Grace au two-way binding faite qu on puisse modifier:

- le nom
- la note

## Affichez la liste

### Créez une liste de jeu vidéo

Créez un fichier liste-jeu-vidéo.ts dans le dossier src/app.

Dedans créer une liste constante de jeu vidéo en utilisant l'interface jeu vidéo

### Créez un component liste de jeu

Créez un component liste de jeu et importez la liste crée plus tot.

### Affichez la liste de jeux vidéos

Grace a la directive ```ngFor``` afficher une liste de jeux vidéo.

### Affichez les détails du jeux vidéo

Dans le meme component affichez les details du jeu vidéo selectionné grace aux component jeu vidéo. N'oubliez pas ```ngIf``` pour cacher les détails vide.

### Passez les infos du jeu

Grace a ```@Input()``` recuperer dans le jeu vidéo component les infos du jeu.
