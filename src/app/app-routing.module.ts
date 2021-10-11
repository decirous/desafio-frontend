import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlterarComponent } from './cliente/alterar/alterar.component';
import { DetalharComponent } from './cliente/detalhar/detalhar.component';
import { IncluirComponent } from './cliente/incluir/incluir.component';
import { ListarComponent } from './cliente/listar/listar.component';

const routes: Routes = [
  {
    path: 'lista',
    component: ListarComponent
  },
  {
    path: 'alterar/:id',
    component: AlterarComponent
  },
  {
    path: 'incluir',
    component: IncluirComponent
  },
  {
    path: 'detalhar/:id',
    component: DetalharComponent
  },
  {
    path: '',
    component: ListarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
