import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregacoesComponent } from './pregacoes.component';

describe('PregacoesComponent', () => {
  let component: PregacoesComponent;
  let fixture: ComponentFixture<PregacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
