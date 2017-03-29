import {Component, OnInit} from '@angular/core';
import {AppState} from '../app.service';
@Component({
  selector: 'tmo-header',
  templateUrl: './tmo.header.html'
})

export class TmoHeaderComponent implements OnInit {
  public canShowNavElements: boolean;
  public totalCartSize: number;

  constructor(private appState: AppState) {

  }

  public ngOnInit() {
    let state = this.appState.get('value');
    this.canShowNavElements = state !== 'home';
  }
}
