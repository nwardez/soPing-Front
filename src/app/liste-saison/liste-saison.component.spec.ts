import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSaisonComponent } from './liste-saison.component';

describe('ListeSaisonComponent', () => {
  let component: ListeSaisonComponent;
  let fixture: ComponentFixture<ListeSaisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeSaisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
