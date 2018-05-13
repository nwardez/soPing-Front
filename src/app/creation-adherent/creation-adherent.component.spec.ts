import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationAdherentComponent } from './creation-adherent.component';

describe('CreationAdherentComponent', () => {
  let component: CreationAdherentComponent;
  let fixture: ComponentFixture<CreationAdherentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationAdherentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationAdherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
