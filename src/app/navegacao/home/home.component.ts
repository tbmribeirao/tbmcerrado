import { LoadingService } from '../../servicos/loading/loading.service';
import { Artigo } from './../../servicos/artigo/artigo';
import { Component, Input, OnInit } from '@angular/core';
import { ArtigoService } from '../../servicos/artigo/artigo.service';
import { PregacaoService } from '../../servicos/pregacao/pregacao.service';
import { Pregacao } from '../../servicos/pregacao/pregacao';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pregacao: Pregacao;
  public artigo: Artigo;
  public search: string = '';
  public loading$ = this.loader.loading$;

  constructor(
    private pregacaoService: PregacaoService,
    private artigoService: ArtigoService,
    private route: Router,
    private loader: LoadingService
  ) { }

  @Input() tipoCard: string

  ngOnInit(): void {

    this.pregacaoService.GetPregacoes(undefined, undefined, 1, 0).subscribe(pregacoes => {
      this.pregacao = pregacoes.data[0];
    });

    this.artigoService.GetArtigos(undefined, undefined, 1, 0).subscribe(artigos => {
      this.artigo = artigos.data[0];
    })

  }

  Search(){
    this.route.navigate(['/conteudos', this.search])
  }
}