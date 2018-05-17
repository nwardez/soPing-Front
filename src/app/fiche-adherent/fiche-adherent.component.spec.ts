import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheAdherentComponent } from './fiche-adherent.component';

describe('FicheAdherentComponent', () => {
  let component: FicheAdherentComponent;
  let fixture: ComponentFixture<FicheAdherentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheAdherentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheAdherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
