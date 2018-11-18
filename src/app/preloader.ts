import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';

@Injectable()
export class Preloader implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    console.log('route', route);
    return of('').pipe(
      delay(3000),
      switchMap(() => {
        console.log('preloading!', fn);
        return fn();
      })
    );
  }
}
