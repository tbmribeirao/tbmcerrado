import { environment } from './../../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { Pagina } from "./pagina";

@Injectable()
export class PaginaService {

    constructor(private http: HttpClient) { }

    protected UrlService : string = environment.apiUrl;

    GetPage(name: string): Observable<Pagina>{

        return this.http.get<Pagina>(`${this.UrlService}igreja/11/pagina/${name}` )
    }
}
