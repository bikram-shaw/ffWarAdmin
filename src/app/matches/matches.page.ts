import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditMatchPage } from '../edit-match/edit-match.page';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.page.html',
  styleUrls: ['./matches.page.scss'],
})
export class MatchesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  mySegment='upcoming';
 
}
