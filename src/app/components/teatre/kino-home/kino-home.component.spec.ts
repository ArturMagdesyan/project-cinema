import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KinoHomeComponent } from './kino-home.component';

describe('KinoHomeComponent', () => {
  let component: KinoHomeComponent;
  let fixture: ComponentFixture<KinoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KinoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KinoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
