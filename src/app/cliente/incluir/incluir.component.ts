import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Cliente from '../Cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']
})
export class IncluirComponent implements OnInit {

  incluirClienteForm: FormGroup;
  cliente: Cliente;

  constructor(private clienteService: ClienteService,
    private router: Router,
    private formBuilder: FormBuilder) {
      this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.incluirClienteForm = this.formBuilder.group({
      nome: [this.clienteService.getValorInput('nome', ''), Validators.required],
      email: [this.clienteService.getValorInput('email', ''), Validators.required],
      cpfCNPJ: [this.clienteService.getValorInput('cpfCNPJ', ''), Validators.required]
    });
  }

  incluirCliente(nome: String, email: String, cpfCNPJ: String) {
    this.clienteService.incluirCLiente(nome, email, cpfCNPJ)
    .subscribe(() => {
      console.log('Cliente incluido com sucesso.')
      this.clienteService.limparSession();
      this.router.navigate(["/lista"]);
    });
  }

  voltar() {
    this.clienteService.limparSession();
    this.router.navigate(["/lista"]);
  }

  cacheForm(nome: string, valor: any) {
    this.clienteService.setAttrSession(nome, valor);
  }
}
