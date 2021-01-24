import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = `${environment.api_url}/auth`;


  constructor(
    private httpClient: HttpClient
  ) { }

  entrar(formulario: any): Promise<any>{
    return this.httpClient.post(`${this.url}/login`, JSON.stringify(formulario)).toPromise();
  }

  registrar(formulario: any): Promise<any>{
    return this.httpClient.post(`${this.url}/registrar`, JSON.stringify(formulario)).toPromise();
  }
}
