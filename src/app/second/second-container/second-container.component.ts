import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, combineLatest } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-second-container',
  templateUrl: './second-container.component.html',
  styleUrls: ['./second-container.component.scss']
})
export class SecondContainerComponent implements OnInit, OnDestroy {
  status = 'online';
  isAlive: boolean = true;

  constructor() { }

  ngOnInit() {
    fromEvent(window, 'offline').pipe(takeWhile(() => this.isAlive)).subscribe(({ type }) => this.setStatus(type));
    fromEvent(window, 'online').pipe(takeWhile(() => this.isAlive)).subscribe(({ type }) => this.setStatus(type));
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  setStatus(val) {
    console.log('type', val);
    this.status = val;
  }

}
