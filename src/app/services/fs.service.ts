import { Injectable } from '@angular/core';
import { statSync, readdirSync } from 'fs';
import { normalize, join } from 'path';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class FsService {

  /**
   *
   *
   * @param directory
   * @returns {any}
   */
  getDirectoriesFromPath(directory): Observable<any> {
    return Observable.create((observer: Observer<string[]>) => {

      const dir = readdirSync(directory)
        .filter((file) => {
          const path = normalize(join(directory, file));
          return statSync(path).isDirectory() && file.charAt(0) !== '.';
        });

      observer.next(dir);
      observer.complete();
    });
  }
}
