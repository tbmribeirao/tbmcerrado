import { LoadingService } from '../../servicos/loading/loading.service';
import { ArtigoService } from '../../servicos/artigo/artigo.service';
import { Artigos, Artigo } from '../../servicos/artigo/artigo';
import { DomSanitizer } from '@angular/platform-browser';
import { PaginaService } from '../../servicos/pagina/pagina.service';
import { Pagina } from 'src/app/servicos/pagina/pagina';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artigos',
  templateUrl: './artigos.component.html',
  styleUrls: ['./artigos.component.css']
})

export class ArtigosComponent implements OnInit {

  public pagina: Pagina;
  public name: any;
  public cover: any;
  public artigos: Artigo[];
  public qtyItems: number;
  public pageSize: number;
  public pageNumber: number;
  public searchText: string = '';
  public loading$ = this.loader.loading$;

  constructor(
    private paginaService: PaginaService,
    private sanitizer: DomSanitizer,
    private artigoService: ArtigoService,
    private loader: LoadingService
  ) { }

  ngOnInit(): void {

    this.paginaService.GetPage('palavras').subscribe(pagina => {
      this.pagina = pagina;
      this.cover = this.sanitizer.bypassSecurityTrustStyle(`url(${pagina.cover})`);
    })

    this.getArtigos();
  }

  getArtigos(pageNumber?: number) {    
      this.artigoService.GetArtigos(undefined, undefined, undefined, pageNumber, this.searchText).subscribe((artigos: Artigos) => {
      this.artigos = artigos.data;
      this.qtyItems = artigos.qtyItems;
      this.pageSize = artigos.pageSize;
      this.pageNumber = artigos.pageNumber;
    })

  }
}
