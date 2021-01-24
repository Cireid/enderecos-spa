import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  validateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private notification: NzNotificationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      senha: this.fb.control('', [Validators.required, Validators.min(6)]),
      nome: this.fb.control('', [Validators.required]),
      genero: this.fb.control(''),
    })
  }

  registrar(){
    if(this.validateForm.valid){
      this.service.registrar(this.validateForm.value).then((resposta)=> {
        console.log(resposta);
        this.notification.success('PARABÉNS', 'VOCê LOGOU')
        this.router.navigate(['/index']);
      }).catch((error)=>{
        console.log(error);
        this.notification.error('DADOS INVALIDOS', 'VERIFIQUE SE OS DADOS ESTÃO CORRETOS')
      });
    }
    else{
      this.notification.error('ERRO', 'Dados invalidos');
      return;
    }
  }

}
