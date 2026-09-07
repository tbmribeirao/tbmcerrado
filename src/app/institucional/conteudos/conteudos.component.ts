import { LoadingService } from './../../servicos/loading/loading.service';
import { PregacaoService } from 'src/app/servicos/pregacao/pregacao.service';
import { Pregacao } from './../../servicos/pregacao/pregacao';
import { Component, OnInit } from '@angular/core';
import { ArtigoService } from './../../servicos/artigo/artigo.service';
import { ActivatedRoute } from '@angular/router';
import { Artigo } from 'src/app/servicos/artigo/artigo';

@Component({
    selector: 'app-conteudos',
    templateUrl: './conteudos.component.html',
    styleUrls: ['./conteudos.component.css'],
    standalone: false
})
export class ConteudosComponent implements OnInit {

  private searchText: string;
  public artigos: Artigo[];
  public pregacoes: Pregacao[];
  public loading$ = this.loader.loading$;

  constructor(
    private route: ActivatedRoute,
    private artigoService: ArtigoService,
    private pregacaoService: PregacaoService,
    private loader: LoadingService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parametros => {

      this.searchText = parametros['search']

      this.artigoService.GetArtigos(undefined, undefined, undefined, undefined, this.searchText).subscribe({
        next: (artigos) => {
          this.artigos = artigos.data;
        }
      });

      this.pregacaoService.GetPregacoes(undefined, undefined, undefined, undefined, this.searchText).subscribe({
        next: (pregacoes) => this.pregacoes = pregacoes.data
      })
    });
  }
}