import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondContainerComponent } from './second-container/second-container.component';
import { RouterModule } from '@angular/router';

const routes  = [
  { path: '', component: SecondContainerComponent }
];

@NgModule({
  declarations: [SecondContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SecondModule { }
