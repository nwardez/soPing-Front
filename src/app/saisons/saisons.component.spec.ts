import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisonsComponent } from './saisons.component';

describe('SaisonsComponent', () => {
  let component: SaisonsComponent;
  let fixture: ComponentFixture<SaisonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaisonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
