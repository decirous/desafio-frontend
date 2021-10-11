import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Cliente from '../Cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit() {
    this.listarClientes();
  }

  listarClientes() {
    this.clienteService
    .getCliente()
    .subscribe((data: Cliente[]) => {
      this.clientes = data;
    });
  }
  
  alterarCliente(id: String): void {
    this.router.navigate([`/alterar`, id]);
  }

  excluirCliente(id: String): void {
    this.clienteService.excluirCliente(id).subscribe(data => {this.listarClientes();});
  }

  detalhaCliente(id: String): void {
    this.router.navigate([`/detalhar`, id]);
  }

  incluirCliente() {
    this.router.navigate(["incluir"]);
  }
}
