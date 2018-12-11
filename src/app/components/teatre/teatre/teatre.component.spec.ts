import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeatreComponent } from './teatre.component';

describe('TeatreComponent', () => {
  let component: TeatreComponent;
  let fixture: ComponentFixture<TeatreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeatreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
