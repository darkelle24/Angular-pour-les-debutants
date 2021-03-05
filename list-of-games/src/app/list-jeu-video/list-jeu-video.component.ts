import { JeuService } from './../_services/jeu.service';
import { JeuVideo } from './../_models/jeu-video';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-jeu-video',
  templateUrl: './list-jeu-video.component.html',
  styleUrls: ['./list-jeu-video.component.scss']
})
export class ListJeuVideoComponent implements OnInit {

  @Input() enterpriseName: string = 'Blizzard';

  hideJeu = false

  list = []

  constructor(private jeu: JeuService, private router: Router) {}

  ngOnInit(): void {
    this.list = this.jeu.LIST
  }

  showJeu(jeu: JeuVideo) {
    this.hideJeu = true
    this.router.navigate(['jeu', jeu.id]);
  }

}
