import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarReunionComponent } from './buscar-reunion.component';

describe('BuscarReunionComponent', () => {
  let component: BuscarReunionComponent;
  let fixture: ComponentFixture<BuscarReunionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarReunionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarReunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
