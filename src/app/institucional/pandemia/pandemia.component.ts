import { Pregacoes } from './../../servicos/pregacao/pregacao';
import { Pagina } from '../../servicos/pagina/pagina';
import { DomSanitizer } from '@angular/platform-browser';
import { PaginaService } from '../../servicos/pagina/pagina.service';
import { Component, OnInit } from '@angular/core';
import { PregacaoService } from 'src/app/servicos/pregacao/pregacao.service';
import { Pregacao } from 'src/app/servicos/pregacao/pregacao';

@Component({
    selector: 'app-pandemia',
    templateUrl: './pandemia.component.html',
    styleUrls: ['./pandemia.component.css'],
    standalone: false
})
export class PandemiaComponent implements OnInit {

  public pagina: Pagina;
  public name: any;
  public cover: any;
  public pregacoes: Pregacao[];
  public qtyItems: number;
  public pageSize: number;
  public pageNumber: number;
  public searchText: string = '';

  constructor(
    private paginaService: PaginaService,
    private pregacaoService: PregacaoService,
    private sanitizer: DomSanitizer
    ) { }

  ngOnInit(): void {
    this.paginaService.GetPage('pandemia').subscribe(pagina => {
      this.pagina = pagina;
      this.cover = this.sanitizer.bypassSecurityTrustStyle(`url(${pagina.cover})`);
    })

    this.getPregacoes();
  }

  getPregacoes(pageNumber?: number) {
    this.pregacaoService.GetPregacoes(1, undefined, undefined, pageNumber, this.searchText).subscribe((pregacoes: Pregacoes) => {
      this.pregacoes = pregacoes.data;
      this.qtyItems = pregacoes.qtyItems;
      this.pageSize = pregacoes.pageSize;
      this.pageNumber = pregacoes.pageNumber;
    })
  }
}