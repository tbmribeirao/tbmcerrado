import { environment } from './../../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artigos } from './artigo';

@Injectable()
export class ArtigoService {

    constructor(private http: HttpClient) { }

    protected UrlService : string = environment.apiUrl;

    private MyParameters: HttpParams;

    GetArtigos(tema?: number, id?: string, pageSize?: number, pageNumber?: number, search?: string): Observable<Artigos> {
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

        return this.http.get<Artigos>(`${this.UrlService}igreja/11/artigos`, { params: this.MyParameters });
    }
}

