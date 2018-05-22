import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationSaisonComponent } from './creation-saison.component';

describe('CreationSaisonComponent', () => {
  let component: CreationSaisonComponent;
  let fixture: ComponentFixture<CreationSaisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationSaisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationSaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
