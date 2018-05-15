import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAdhesionsComponent } from './liste-adhesions.component';

describe('ListeAdhesionsComponent', () => {
  let component: ListeAdhesionsComponent;
  let fixture: ComponentFixture<ListeAdhesionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAdhesionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAdhesionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
