import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondContainerComponent } from './second-container.component';

describe('SecondContainerComponent', () => {
  let component: SecondContainerComponent;
  let fixture: ComponentFixture<SecondContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
