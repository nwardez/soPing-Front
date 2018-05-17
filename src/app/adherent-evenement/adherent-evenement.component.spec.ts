import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherentEvenementComponent } from './adherent-evenement.component';

describe('AdherentEvenementComponent', () => {
  let component: AdherentEvenementComponent;
  let fixture: ComponentFixture<AdherentEvenementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdherentEvenementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdherentEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
