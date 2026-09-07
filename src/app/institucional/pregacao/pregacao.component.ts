import { LoadingService } from './../../servicos/loading/loading.service';
import { DomSanitizer } from '@angular/platform-browser';
import { PregacaoService } from './../../servicos/pregacao/pregacao.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Pregacao } from '../../servicos/pregacao/pregacao';

@Component({
    selector: 'app-pregacao',
    templateUrl: './pregacao.component.html',
    styleUrls: ['pregacao.component.css'
    ],
    standalone: false
})
export class PregacaoComponent implements OnInit {

  private pregacaoId: string;
  public pregacao: Pregacao;
  public youtube: any;
  public mp3: any;
  public IsVisibleMP3: boolean;
  public IsYoutubeVisible: boolean;
  public loading$ = this.loader.loading$;

  constructor(
    private route: ActivatedRoute,
    private pregacaoService: PregacaoService,
    private sanitizer: DomSanitizer,
    private loader: LoadingService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parametros => {
      this.pregacaoId = parametros['id'];

      this.pregacaoService.GetPregacoes(undefined, this.pregacaoId).subscribe(pregacao => {

        this.pregacao = pregacao.data[0];

        this.youtube = this.sanitizer.bypassSecurityTrustResourceUrl(this.pregacao.youtube);
        this.IsYoutubeVisible = this.pregacao.youtube === undefined ? false : true;

        this.mp3 = this.sanitizer.bypassSecurityTrustResourceUrl(this.pregacao.mp3);
        this.IsVisibleMP3 = this.pregacao.mp3 === undefined ? false : true;
      })
    })
  }
}
