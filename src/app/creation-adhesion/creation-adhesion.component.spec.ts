import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationAdhesionComponent } from './creation-adhesion.component';

describe('CreationAdhesionComponent', () => {
  let component: CreationAdhesionComponent;
  let fixture: ComponentFixture<CreationAdhesionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationAdhesionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationAdhesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
