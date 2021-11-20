import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceberParceladoComponent } from './receber-parcelado.component';

describe('ReceberParceladoComponent', () => {
  let component: ReceberParceladoComponent;
  let fixture: ComponentFixture<ReceberParceladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceberParceladoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceberParceladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
