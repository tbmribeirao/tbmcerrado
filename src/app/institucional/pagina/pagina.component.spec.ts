import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { PaginaComponent } from './pagina.component';
import { PaginaService } from '../../servicos/pagina/pagina.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('PaginaComponent', () => {
  let component: PaginaComponent;
  let fixture: ComponentFixture<PaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [PaginaComponent],
    imports: [RouterTestingModule],
    providers: [
        PaginaService,
        { provide: ActivatedRoute, useValue: { params: of({ name: 'quem-somos' }) } },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
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
