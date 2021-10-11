import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ClienteService } from '../cliente.service';

import { IncluirComponent } from './incluir.component';


describe('IncluirComponent', () => {
  let component: IncluirComponent;
  let fixture: ComponentFixture<IncluirComponent>;
  let service: ClienteService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule], 
      declarations: [ IncluirComponent ],
      providers: [ClienteService]
    })
    .compileComponents();
    service = TestBed.get(ClienteService);

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve testar incluirCliente()', () => {
    spyOn(service, 'incluirCLiente').and.callThrough();
    component.incluirCliente('Decio', 'decio@e.c', '12345678945');
    expect(service.incluirCLiente).toHaveBeenCalled();
  })
});
