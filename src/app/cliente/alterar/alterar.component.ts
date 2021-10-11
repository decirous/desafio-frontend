import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import Cliente from '../Cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.css']
})
export class AlterarComponent implements OnInit {

  alterarClienteForm: FormGroup;
  cliente: Cliente;

  constructor(private formBuilder: FormBuilder, 
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute) {
    this.createForm();
   }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (id !== null) {
      this.clienteService.getClienteDetalhe(id)
      .subscribe((data: Cliente) => {
        this.cliente = data;
        this.alterarClienteForm.controls['nome'].setValue(this.clienteService.getValorInput('nome', this.cliente.nome));
        this.alterarClienteForm.controls['email'].setValue(this.clienteService.getValorInput('email', this.cliente.email));
      });
      
    } else {
      console.log('Erro ao carregar Cliente para alteração');
      this.router.navigate(["/clientes"]);
    }
  }

  createForm() {
    this.alterarClienteForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  alterarCliente(nome: String, email: String) {
    this.clienteService.alterarCliente(this.cliente.id, nome, email)
      .subscribe(() => {
        console.log('Cliente alterado com sucesso.');
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
