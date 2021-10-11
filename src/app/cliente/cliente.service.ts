import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

    uri = 'http://localhost:8080';
    constructor(private http: HttpClient) { }

    getCliente(): Observable<any> {
        return this.http.get(`${this.uri}/clientes`);
    }

    getClienteDetalhe(id: String): Observable<any> {
        return this.http.get(`${this.uri}/clientes/${id}`);
    }

    excluirCliente(id: Number) {
        return this.http.delete(`${this.uri}/clientes/${id}`);
    } 

    alterarCliente(id: Number, nome: String, email: String) {
        const input = { nome: nome, email: email };
        return this.http.put(`${this.uri}/clientes/${id}`, input);
    }

    incluirCLiente(nome: String, email: String, cpfCNPJ: String) {
        const input = { nome: nome, email: email, cpfCNPJ: cpfCNPJ };
        return this.http.post(`${this.uri}/clientes`, input);
    }

    getAttrSession(nome: string) {
        return sessionStorage.getItem(nome);
    }

    setAttrSession(nome: string, valor: any) {
        sessionStorage.setItem(nome, valor);
    }

    getValorInput(nome: string, valorObj: any) {
        var valorSession = this.getAttrSession(nome);
        return (valorSession) ? valorSession : valorObj;
    }

    limparSession() {
        sessionStorage.clear();
    }
}