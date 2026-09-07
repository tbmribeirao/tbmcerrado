import { LoadingService } from './../../servicos/loading/loading.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Artigo } from './../../servicos/artigo/artigo'
import { ArtigoService } from './../../servicos/artigo/artigo.service'
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-artigo',
    templateUrl: './artigo.component.html',
    styleUrls: ['./artigo.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ArtigoComponent implements OnInit {

  public artigoId: string;
  public Artigo: Artigo;
  public Cover: any;
  public Texto: any;
  public loading$ = this.loader.loading$;

  constructor(
    private route: ActivatedRoute,
    private artigoService: ArtigoService,
    private sanitizer: DomSanitizer,
    private loader: LoadingService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(parametros => {

      this.artigoId = parametros['id']

      this.artigoService.GetArtigos(undefined, this.artigoId).subscribe({
        next: artigos => {
          this.Artigo = artigos.data[0];
          this.Cover = this.sanitizer.bypassSecurityTrustStyle(`url(${this.Artigo.cover})`);
        }
      });
    });
  }
}
