import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';

import { IAppState } from '../store/index';
import { GET_FILES } from '../store/files/files.actions';

const electron = require('electron').remote;

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  localSearch = electron.app.getPath('home');
  directories$: Observable<string>;
  search$: Observable<string>;
  loading$: Observable<boolean>;

  constructor(private store: Store<IAppState>) {}

  searchPath() {
    this.store.dispatch({
      type: GET_FILES,
      payload: this.localSearch
    });
  }

  public ngOnInit() {
    this.directories$ = this.store.select('files').pluck('directories');
    this.loading$ = this.store.select('files').pluck('loading');
    this.search$ = this.store.select('files').pluck('search');

    // perform initial directory fetching
    this.searchPath();
  }
}
