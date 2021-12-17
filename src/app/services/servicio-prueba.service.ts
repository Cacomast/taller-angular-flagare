import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicioPruebaService {

  private uri;
  constructor( private http: HttpClient) {

    this.uri= `${environment.uri}`;

   }

   getPersonajes(){
    return this.http.get(`${this.uri}/character`);
   }
}
