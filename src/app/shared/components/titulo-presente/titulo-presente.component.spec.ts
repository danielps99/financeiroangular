import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloPresenteComponent } from './titulo-presente.component';

describe('TituloPresenteComponent', () => {
  let component: TituloPresenteComponent;
  let fixture: ComponentFixture<TituloPresenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloPresenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloPresenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
