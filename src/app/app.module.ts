import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_BR } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { NzFormModule } from 'ng-zorro-antd/form';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { RegistrarComponent } from './login/registrar/registrar.component';
import { CadastraComponent } from './index/cadastra/cadastra.component';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { EditarComponent } from './index/editar/editar.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DetalheComponent } from './index/detalhe/detalhe.component';





registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    RegistrarComponent,
    CadastraComponent,
    EditarComponent,
    DetalheComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzFormModule,
    NzButtonModule,
    NzIconModule,
    NzCheckboxModule,
    NzInputModule,
    NzTableModule,
    NzDropDownModule,
    NzTypographyModule,
    NzModalModule,
    NzSelectModule,
    NzListModule,
    NzGridModule,
    NzNotificationModule,
    Ng2SearchPipeModule,
    
    
  ],
  providers: [{ provide: NZ_I18N, useValue: pt_BR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
