import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { PaginaComponent } from './pagina.component';
import { PaginaService } from '../../servicos/pagina/pagina.service';

describe('PaginaComponent', () => {
  let component: PaginaComponent;
  let fixture: ComponentFixture<PaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ PaginaComponent ],
      providers: [
        PaginaService,
        { provide: ActivatedRoute, useValue: { params: of({ name: 'quem-somos' }) } }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
