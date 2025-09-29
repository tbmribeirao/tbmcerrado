import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.css']
})
export class PaginacaoComponent implements OnInit {

  constructor() { }

  @Input() qtyItems: string;
  @Input() pageSize: string;
  @Input() pageNumber: string;

  @Output() newPageNumber = new EventEmitter<number>();

  public pagePreview: number;
  public pageNext: number;
  public pageNext2: number;
  public pageNext3: number;
  public blockPagePreview: boolean;
  public blockPageNext: boolean;
  public blockPageNext2: boolean;
  public blockPageNext3: boolean;
  private pageLimit: number;


  ngOnInit(): void {
    this.calculaPaginacao(+this.pageNumber);
  }

  setPage(page: number) {
    this.calculaPaginacao(page);
    this.newPageNumber.emit(page);
  }

  private calculaPaginacao(pageNumber: number) {    
    this.blockPagePreview = false;
    this.blockPageNext = false;
    this.blockPageNext2 = false;
    this.blockPageNext3 = false;
    
    this.pageLimit = Math.ceil(Number(this.qtyItems) / Number(this.pageSize));
    this.pagePreview = pageNumber == 0 ? -1 : Number(pageNumber) - 1;
    this.pageNext = Number(pageNumber) + 1;
    this.pageNext2 = Number(pageNumber) + 2;
    this.pageNext3 = Number(pageNumber) + 3;

    if (this.pageNext >= this.pageLimit)
      this.blockPageNext = true;

    if (this.pageNext2 >= this.pageLimit)
      this.blockPageNext2 = true;

    if (this.pageNext3 >= this.pageLimit)
      this.blockPageNext3 = true;

    if (this.pagePreview < 0)
      this.blockPagePreview = true;
  }
}
