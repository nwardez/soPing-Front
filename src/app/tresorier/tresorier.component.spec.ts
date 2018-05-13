import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresorierComponent } from './tresorier.component';

describe('TresorierComponent', () => {
  let component: TresorierComponent;
  let fixture: ComponentFixture<TresorierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresorierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresorierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
