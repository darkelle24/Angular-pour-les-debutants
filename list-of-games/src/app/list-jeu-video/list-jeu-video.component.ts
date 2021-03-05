import { JeuVideo } from './../_models/jeu-video';
import { LIST } from './../list';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-jeu-video',
  templateUrl: './list-jeu-video.component.html',
  styleUrls: ['./list-jeu-video.component.scss']
})
export class ListJeuVideoComponent implements OnInit {

  @Input() enterpriseName: string = 'Blizzard';

  hideJeu = false
  jeuSelect = null

  list = LIST

  constructor() { }

  ngOnInit(): void {
  }

  showJeu(jeu: JeuVideo) {
    if (!(this.hideJeu && this.jeuSelect === jeu)) {
      this.hideJeu = true
      this.jeuSelect = jeu
    } else {
      this.hideJeu = false
    }
  }

}
