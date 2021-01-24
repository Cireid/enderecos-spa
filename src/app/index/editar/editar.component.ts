import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { EnderecosService } from '../enderecos.service';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  @Input() modelId:number;
  validateForm: FormGroup;

  constructor(  private fb: FormBuilder,
                private service: EnderecosService,
                private notification: NzNotificationService,
                private modalref: NzModalRef) { }

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
    this.mostrarPorId();
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

  mostrarPorId(){
    this.service.mostrarPorId(this.modelId).then((resposta) => {
      console.log(resposta);
      this.preencherFormulario(resposta)
    })
  }

  salvar(){
    if(this.validateForm.valid){
      console.log(this.validateForm.value)
      this.service.editar(this.validateForm.value, this.modelId).then((resposta) =>{
        console.log(resposta);
        this.notification.success('Editar Endereço' ,'Endereço alterado com sucesso')
        this.modalref.destroy();
      }).catch((error) => {
        console.log(error);
        this.notification.error('Editar endereços', 'Dados invalidos');
      })
    }
    else{
      this.notification.error('Editar endereços', 'Dados invalidos');
    }
  }

}
