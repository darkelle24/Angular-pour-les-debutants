import { Injectable } from '@angular/core';
import { JeuVideo } from './../_models/jeu-video';

@Injectable({
  providedIn: 'root'
})
export class JeuService {

 LIST: JeuVideo[] = [
  { id: 1, nom: 'diablo', note: 10 },
  { id: 2, nom: 'Overwatch', note: 12 },
  { id: 3, nom: 'LOL', note: 13 },
  { id: 4, nom: 'Skyrim', note: 15 },
  { id: 5, nom: 'Dota', note: 2 },
  {id: 6, nom: 'Hearth Of Iron 4', note: 20},
 ]

  getOneGame(id: number): JeuVideo {
    let find = undefined

    this.LIST.forEach(game => {
      if (game.id == id)
        find = game
    });
    return find
  }

  constructor() { }
}
