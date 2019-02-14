import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGhostComponent } from './card-ghost.component';

describe('CardGhostComponent', () => {
  let component: CardGhostComponent;
  let fixture: ComponentFixture<CardGhostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardGhostComponent]
    })
      .compileComponents()
      .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGhostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
