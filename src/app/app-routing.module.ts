import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Preloader } from './preloader';

const routes: Routes = [
  { path: 'first', loadChildren: './first/first.module#FirstModule'},
  { path: 'second', loadChildren: './second/second.module#SecondModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: Preloader
  })],
  providers: [
    Preloader
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
