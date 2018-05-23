import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationTypeLicenceComponent } from './creation-type-licence.component';

describe('CreationTypeLicenceComponent', () => {
  let component: CreationTypeLicenceComponent;
  let fixture: ComponentFixture<CreationTypeLicenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationTypeLicenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationTypeLicenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
