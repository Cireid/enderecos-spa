import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnderecosService } from '../enderecos.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss']
})
export class DetalheComponent implements OnInit {

  @Input() cep: any;
  validateForm: FormGroup;

  latitude:number;
  longetude:number

  constructor(private fb: FormBuilder,
              private service: EnderecosService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      cep: this.fb.control('', [Validators.required, Validators.max(8)]),
      logradouro_tipo: this.fb.control('', [Validators.required]),
      logradouro: this.fb.control('',[Validators.required]),
      compelemento: this.fb.control('', [Validators.required]),
      numero: this.fb.control('', [Validators.required]),
      bairro: this.fb.control('', [Validators.required]),
      cidade: this.fb.control('', [Validators.required]),
      estado: this.fb.control('', [Validators.required]),
      longitude: this.fb.control('', [Validators.required]),
      latitude: this.fb.control('', [Validators.required]),
    })
    this.mostrarPorCep();
  }

  preencherFormulario(dados: any){
    this.validateForm.patchValue({
      cep: dados.cep,
      logradouro_tipo: dados.logradouro_tipo,
      logradouro: dados.logradouro,
      compelemento: dados.compelemento,
      numero: dados.numero,
      bairro: dados.bairro,
      cidade: dados.cidade,
      estado: dados.estado,
      longitude: dados.longitude,
      latitude: dados.latitude,
    })
  }

  prepararMapa(data) {
    const mapa = L.map('mapa').setView([data.latitude, data.longitude], 13);
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © OpenStreetMap contributors',
        maxZoom: 18,
    }).addTo(mapa);

    const marcacao = L.marker([data.latitude, data.longitude]).addTo(mapa);
}

  mostrarPorCep(){
    this.service.mostrarPorCep(this.cep).then((resposta) => {
      console.log(resposta);
      this.preencherFormulario(resposta);
      this.prepararMapa(resposta);
    })
  }

  

}
