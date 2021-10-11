import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Cliente from '../Cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.component.html',
  styleUrls: ['./detalhar.component.css']
})
export class DetalharComponent implements OnInit {

  cliente: Cliente = new Cliente;

  constructor(private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (id !== null) {
      this.clienteService.getClienteDetalhe(id)
      .subscribe((data: Cliente) => {
        this.cliente = data;
      });
       
    } else {
      console.log('Erro ao carregar Cliente para detalhamento');
      this.router.navigate(["/clientes"]);
    }
  }

  alterarCliente(id: String): void {
    this.router.navigate([`/alterar`, id]);
  }

  voltar() {
    this.router.navigate(["/lista"]);
  }

}
