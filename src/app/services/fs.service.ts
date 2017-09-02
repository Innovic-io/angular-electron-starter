import { Injectable } from '@angular/core';
import { readdir, statSync } from 'fs';
import { normalize, join } from 'path';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FsService {

  /**
   *
   *
   * @param directory
   * @returns {any}
   */
  getDirectoriesFromPath(directory): Observable<any> {
    return Observable.create((observer) => {
      readdir(normalize(directory), (err, list) => {

        const directories = list.filter((file) => {
          const path = normalize(join(directory, file));

          return statSync(path).isDirectory() && file.charAt(0) !== '.';
        });

        observer.next(directories);
      });
    });
  }
}
