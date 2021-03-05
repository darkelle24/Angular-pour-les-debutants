import { JeuService } from './../_services/jeu.service';
import { JeuVideo } from './../_models/jeu-video';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jeu-video',
  templateUrl: './jeu-video.component.html',
  styleUrls: ['./jeu-video.component.scss']
})
export class JeuVideoComponent implements OnInit {

  jeuVideo: JeuVideo | null = null;

  idOfJeu = 0

  constructor(private jeu: JeuService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(
      data => {
        console.log(data)
        this.idOfJeu = parseInt(data.get('id'))
        this.jeuVideo = this.jeu.getOneGame(this.idOfJeu)
      }
    );
  }

  ngOnInit(): void {
  }

  isClicked() {
    console.log(this.jeuVideo)
  }

}
