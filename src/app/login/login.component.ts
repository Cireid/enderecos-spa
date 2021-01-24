import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from './auth.service';
import { RegistrarComponent } from './registrar/registrar.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validateForm!: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder,
              private modal: NzModalService,
              private service: AuthService,
              private notification: NzNotificationService,
              private router: Router,

              ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required, Validators.min(6)]),
    });
  }


  showModal(): void {
    this.modal.create({
      nzTitle: 'Cadastrar',
      nzContent: RegistrarComponent,
      nzFooter: null,
    })
  }

  entrar(){
    if(this.validateForm.invalid){
      this.notification.error('Erro','Dados invalidos');
      return
    }

    this.service.entrar(this.validateForm.value).then((resposta) => {
      console.log(resposta);
      this.notification.success('PARABÉNS', 'VOCÊ LOGOU')
      this.router.navigate(['/index']);
    }).catch((error) => {
      console.log(error);
      this.notification.error('ERRO','VERIFIQUE OS DADOS INSERIDOS')
    });
  }

}
