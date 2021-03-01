import { JeuVideo } from './../_models/jeu-video';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jeu-video',
  templateUrl: './jeu-video.component.html',
  styleUrls: ['./jeu-video.component.scss']
})
export class JeuVideoComponent implements OnInit {

  @Input() jeuVideo: JeuVideo | null;

  constructor() { }

  ngOnInit(): void {
  }

  isClicked() {
    console.log(this.jeuVideo)
  }

}
