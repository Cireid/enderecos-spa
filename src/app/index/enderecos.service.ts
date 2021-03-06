import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnderecosService {

  url = `${environment.api_url}/enderecos`;

  constructor(
  private  httpClient: HttpClient
  ) { }

  todos(): Promise<any>{
    return this.httpClient.get(`${this.url}/todos`).toPromise();
  }

  guardar(formulario: any): Promise<any>{
    return this.httpClient.post(`${this.url}/guardar`, JSON.stringify(formulario)).toPromise();
  }

  mostrarPorId(id: number): Promise<any>{
    return this.httpClient.get(`${this.url}/mostrar/${id}`).toPromise();
  }

  mostrarPorCep(cep: any): Promise<any>{
    return this.httpClient.get(`${this.url}/mostrar/cep/${cep}`).toPromise();
  }

  editar(formulario: any, id: number):Promise<any>{
    return this.httpClient.put(`${this.url}/editar/${id}`, JSON.stringify(formulario)).toPromise();
  }

  apagar(id: number): Promise<any>{
    return this.httpClient.delete(`${this.url}/apagar/${id}`).toPromise();
  }

  pesquisarCep(cep: any){
    const headers = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Token token=9bd411a890b12311d7a6c4631d9d8c4d'
      })
    };

    return this.httpClient.get(`https://cors-anywhere.herokuapp.com/https://www.cepaberto.com/api/v3/cep?cep=${cep}`, headers)
  }

}
