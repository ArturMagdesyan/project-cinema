import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeatreHomeComponent } from './teatre-home.component';

describe('TeatreHomeComponent', () => {
  let component: TeatreHomeComponent;
  let fixture: ComponentFixture<TeatreHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeatreHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeatreHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
