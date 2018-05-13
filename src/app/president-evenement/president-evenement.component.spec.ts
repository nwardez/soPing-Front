import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentEvenementComponent } from './president-evenement.component';

describe('PresidentEvenementComponent', () => {
  let component: PresidentEvenementComponent;
  let fixture: ComponentFixture<PresidentEvenementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresidentEvenementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresidentEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
