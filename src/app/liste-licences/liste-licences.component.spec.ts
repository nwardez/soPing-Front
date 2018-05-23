import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLicencesComponent } from './liste-licences.component';

describe('ListeLicencesComponent', () => {
  let component: ListeLicencesComponent;
  let fixture: ComponentFixture<ListeLicencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeLicencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeLicencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
