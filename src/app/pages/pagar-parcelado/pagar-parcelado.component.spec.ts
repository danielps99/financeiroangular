import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagarParceladoComponent } from './pagar-parcelado.component';

describe('PagarParceladoComponent', () => {
  let component: PagarParceladoComponent;
  let fixture: ComponentFixture<PagarParceladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagarParceladoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagarParceladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
