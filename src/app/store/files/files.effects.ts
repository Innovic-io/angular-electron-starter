import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

import * as filesActions from './files.actions';
import { FsService } from '../../services/fs.service';

@Injectable()
export class FilesEffects {

  @Effect()
  addFeed$ = this.actions$
    .ofType(filesActions.GET_FILES)
    .switchMap((action: filesActions.GetFilesAction) => {

      return this.fs.getDirectoriesFromPath(action.payload)
        .map((files) => new filesActions.GetFilesActionSuccess(files));
    });

  constructor(private actions$: Actions, private fs: FsService) {}
}
