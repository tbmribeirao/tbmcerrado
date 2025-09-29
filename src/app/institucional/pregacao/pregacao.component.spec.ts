import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregacaoComponent } from './pregacao.component';

describe('PregacaoComponent', () => {
  let component: PregacaoComponent;
  let fixture: ComponentFixture<PregacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
