import { LoadingService } from './../../servicos/loading/loading.service';
import { Pregacoes } from './../../servicos/pregacao/pregacao';
import { Pagina } from '../../servicos/pagina/pagina';
import { DomSanitizer } from '@angular/platform-browser';
import { PaginaService } from '../../servicos/pagina/pagina.service';
import { Component, OnInit } from '@angular/core';
import { PregacaoService } from 'src/app/servicos/pregacao/pregacao.service';
import { Pregacao } from 'src/app/servicos/pregacao/pregacao';

@Component({
  selector: 'app-pregacoes',
  templateUrl: './pregacoes.component.html',
  styleUrls: ['./pregacoes.component.css']
})
export class PregacoesComponent implements OnInit {

  public pagina: Pagina;
  public name: any;
  public cover: any;
  public pregacoes: Pregacao[];
  public qtyItems: number;
  public pageSize: number;
  public pageNumber: number;
  public searchText: string = '';
  public loading$ = this.loader.loading$;

  constructor(
    private paginaService: PaginaService,
    private pregacaoService: PregacaoService,
    private sanitizer: DomSanitizer,
    private loader: LoadingService
    ) { }

  ngOnInit(): void {
    this.paginaService.GetPage('pregações').subscribe(pagina => {
      this.pagina = pagina;
      this.cover = this.sanitizer.bypassSecurityTrustStyle(`url(${pagina.cover})`);
    })

    this.getPregacoes();
  }

  getPregacoes(pageNumber?: number) {
    this.pregacaoService.GetPregacoes(undefined, undefined, undefined, pageNumber, this.searchText).subscribe((pregacoes: Pregacoes) => {
      this.pregacoes = pregacoes.data;
      this.qtyItems = pregacoes.qtyItems;
      this.pageSize = pregacoes.pageSize;
      this.pageNumber = pregacoes.pageNumber;
    })
  }
}