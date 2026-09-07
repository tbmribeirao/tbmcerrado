import { ActivatedRoute } from '@angular/router';
import { PaginaService } from '../../servicos/pagina/pagina.service';
import { Component, OnInit } from '@angular/core';
import { Pagina } from '../../servicos/pagina/pagina';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-pagina',
    templateUrl: './pagina.component.html',
    styleUrls: ['./pagina.component.css'],
    standalone: false
})
export class PaginaComponent implements OnInit {

  public pagina: Pagina;
  public cover: any;
  public music: any;
  private name: string;
  public texto: any;

  constructor(
    private paginaService: PaginaService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(parametros => {
      
      this.name = parametros['name']

      this.paginaService.GetPage(this.name).subscribe(pagina => {
        this.cover = this.sanitizer.bypassSecurityTrustStyle(`url(${pagina.cover})`);
        this.music = this.sanitizer.bypassSecurityTrustResourceUrl(pagina.music);
        this.texto = this.sanitizer.bypassSecurityTrustHtml(pagina.text)
        this.pagina = pagina;
      },
        error => console.log(error)
      )

    });
  }

}
