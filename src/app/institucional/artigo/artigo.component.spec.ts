import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { ArtigoComponent } from './artigo.component';
import { LoadingComponent } from '../../componentes/loading/loading.component';
import { ArtigoService } from '../../servicos/artigo/artigo.service';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';

describe('ArtigoComponent', () => {
  let component: ArtigoComponent;
  let fixture: ComponentFixture<ArtigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [ArtigoComponent, LoadingComponent],
    imports: [RouterTestingModule],
    providers: [
        ArtigoService,
        { provide: ActivatedRoute, useValue: { params: of({ id: '1' }) } },
        provideHttpClient(withXhr(), withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should read the article id from the route', () => {
    expect(component.artigoId).toEqual('1');
  });
});
