import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component:AppComponent, children:[
    { path: '', pathMatch: 'full', redirectTo: '/login' },
    { path: 'login', component: LoginComponent },
    { path: 'index', component: IndexComponent }
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
