import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationCategorieComponent } from './creation-categorie.component';

describe('CreationCategorieComponent', () => {
  let component: CreationCategorieComponent;
  let fixture: ComponentFixture<CreationCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
