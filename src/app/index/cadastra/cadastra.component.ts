import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { EnderecosService } from '../enderecos.service';

@Component({
  selector: 'app-cadastra',
  templateUrl: './cadastra.component.html',
  styleUrls: ['./cadastra.component.scss']
})
export class CadastraComponent implements OnInit {

  validateForm: FormGroup;

  constructor(private fb: FormBuilder,
              private notification: NzNotificationService,
              private service: EnderecosService,
              private modalref: NzModalRef,
              ) { }

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
  }

  pesquisarCep(cep) {
    this.service.pesquisarCep(cep).subscribe((resposta:any) => {
        console.log(resposta);

        this.validateForm.patchValue({
            endereco: resposta.logradouro,
            numero: resposta.numero,
            complemento: resposta.complemento,
            cep: resposta.cep ,
            bairro: resposta.bairro,
            cidade: resposta.cidade.nome,
            estado: resposta.estado.sigla,
            latitude: resposta.latitude,
            longitude: resposta.longitude
        });
    });
}

  salvar(){
    if(this.validateForm.valid){
      
      this.service.guardar(this.validateForm.value).then((resposta) => {
        console.log(resposta);
        this.notification.success('Cadastrar novo endereço','Endereço cadastrado com sucesso');
        this.modalref.destroy();
      }).catch((error) => {
        console.log(error);
        this.notification.error('Cadastrar novo endereço', 'Verifique os dados inseridos')
      })
    }
    else{
      this.notification.error('Campos invalidos', 'Verifique as informações')
    }
  }



}
