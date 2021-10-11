import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './cliente/listar/listar.component';
import { ClienteService } from './cliente/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlterarComponent } from './cliente/alterar/alterar.component';
import { IncluirComponent } from './cliente/incluir/incluir.component';
import { DetalharComponent } from './cliente/detalhar/detalhar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AlterarComponent,
    IncluirComponent,
    DetalharComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ClienteService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
