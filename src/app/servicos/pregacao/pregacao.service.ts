import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pregacoes } from '../../servicos/pregacao/pregacao';

@Injectable({
    providedIn: 'root'
})

export class PregacaoService {

    constructor(private http: HttpClient) { }

    protected UrlService: string = environment.apiUrl;

    private MyParameters: HttpParams;

    GetPregacoes(tema?: number, id?: string, pageSize?: number, pageNumber?: number, search?: string): Observable<Pregacoes> {

        this.MyParameters = new HttpParams();

        if (tema != undefined)
            this.MyParameters = this.MyParameters.append('tema', tema.toString());

        if (id != undefined)
            this.MyParameters = this.MyParameters.append('id', id);

        if (pageSize != undefined)
            this.MyParameters = this.MyParameters.append('pageSize', pageSize.toString());

        if (pageNumber != undefined)
            this.MyParameters = this.MyParameters.append('pageNumber', pageNumber.toString());

        if (search != undefined)
            this.MyParameters = this.MyParameters.append('search', search);

        return this.http.get<Pregacoes>(`${this.UrlService}igreja/11/cultos`, { params: this.MyParameters });
    }
}
