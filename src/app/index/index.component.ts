import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CadastraComponent } from './cadastra/cadastra.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { EditarComponent } from './editar/editar.component';
import { EnderecosService } from './enderecos.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  
  validateForm!: FormGroup;
  model: any;
  loading = true;
  pesquisar: any;


  constructor(private fb: FormBuilder,
              private modal:NzModalService,
              private service: EnderecosService,
              private notification: NzNotificationService
              ) {}

  ngOnInit(): void {
    this.todos();
  }


  openCadastrar(){
    this.modal.create({
      nzTitle:'Cadastrar Novo Endereço',
      nzContent: CadastraComponent,
      nzFooter: null,
    })
  }

  openEditar(item: any){
    this.modal.create({
      nzTitle: 'Editar Endereço',
      nzContent: EditarComponent,
      nzComponentParams:{
        modelId: item.id
      },
      nzFooter: null,
    })
  }

  openDetalhe(item: any){
    this.modal.create({
      nzTitle: 'Detalhe do Endereço',
      nzContent: DetalheComponent,
      nzComponentParams:{
        cep: item.cep
      },
      nzFooter: null,
    })
  }

  deletar(item){
    this.modal.confirm({
      nzTitle: 'Apagar Endereço',
      nzContent: 'Tem certeza que deseja apagar esse endereço?',
      nzOkText: 'Sim',
      nzCancelText: 'Não',
      nzOnOk: () => {
        console.log(item);
        this.service.apagar(item.id).then(() => {
          this.notification.success('Apagar endereço', 'Endereço apagado com sucesso');
        }).catch(() => {
          this.notification.error('Apagar endereço', 'Houve um erro ao apagar o endereço');
        });
      }
    })
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  todos(){
    this.service.todos().then((model) => {
      console.log(model);
      this.model = model;
      this.loading = false;
    });
  }



}

