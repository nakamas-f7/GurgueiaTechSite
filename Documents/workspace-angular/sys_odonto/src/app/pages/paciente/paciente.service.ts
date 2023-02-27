import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from './paciente.interface';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  listaPacientes: Paciente[] = [
    {
      paciente: {
        pacienteGroup: {
          id: 1,
          nome: 'Paciente 1',
          sexo: 'M',
          dataNascimento: '1990-01-01',
          cpf: '111.111.111-11',
          rg: '11.111.111-1',
          celular: '(11) 1111-1111',
        },
        responsavelGroup: {
          nome: 'Responsável 1',
          sexo: 'F',
          dataNascimento: '1970-01-01',
          cpf: '222.222.222-22',
          obs: 'Observação 1',
        },
        adicionaisGroup: {
          email: 'paciente1@example.com',
          telefone: '(11) 2222-2222',
          comoConheceu: 'Internet',
          prontuario: '123456',
        },
        planoGroup: {
          plano: 'Plano 1',
          carteira: '111111',
          titular: 'Titular 1',
          cpfTitular: '111.111.111-11',
        },
        enderecoGroup: {
          cep: 11111,
          rua: 'Rua do Paciente 1',
          bairro: 'Bairro 1',
          cidade: 'Cidade 1',
          estado: 'UF1',
        },
      },
    },
    {
      paciente: {
        pacienteGroup: {
          id: 2,
          nome: 'Paciente 2',
          sexo: 'F',
          dataNascimento: '1985-02-10',
          cpf: '333.333.333-33',
          rg: '22.222.222-2',
          celular: '(11) 3333-3333',
        },
        responsavelGroup: {
          nome: 'Responsável 2',
          sexo: 'M',
          dataNascimento: '1965-03-15',
          cpf: '444.444.444-44',
          obs: 'Observação 2',
        },
        adicionaisGroup: {
          email: 'paciente2@example.com',
          telefone: '(11) 4444-4444',
          comoConheceu: 'Indicação de amigo',
          prontuario: '654321',
        },
        planoGroup: {
          plano: 'Plano 2',
          carteira: '222222',
          titular: 'Titular 2',
          cpfTitular: '222.222.222-22',
        },
        enderecoGroup: {
          cep: 22222,
          rua: 'Rua do Paciente 2',
          bairro: 'Bairro 2',
          cidade: 'Cidade 2',
          estado: 'UF2',
        },
      },
    },
    // adicione os demais pacientes seguindo a mesma estrutura de objetos
  ];

  constructor() {
    // this.gerarPacientes(4);
    // console.log(this.listaPacientes)
  }

  

  // gerarPacientes(quant: number) {
  //   for (let i = 1; i <= quant; i++) {
  //     paciente.pacienteGroup = {
  //       id: i,
  //       nome: 'Paciente' + i,
  //       sexo: 'Masculino',
  //       dataNascimento: '1990, 0, i',
  //       cpf: `123.456.789-${i}`,
  //       rg: `12.345.678-${i}`,
  //       celular: `(00) 00000-000${i}`,
  //     };

  //     paciente.responsavelGroup = {
  //       nome: `Responsável ${i}`,
  //       sexo: 'Feminino',
  //       dataNascimento: '1980, 0, i',
  //       cpf: `987.654.321-${i}`,
  //       obs: `Observação do responsável ${i}`,
  //     };

  //     paciente.adicionaisGroup = {
  //       email: `paciente${i}@exemplo.com`,
  //       telefone: `(00) 11111-111${i}`,
  //       comoConheceu: `Indicação ${i}`,
  //       prontuario: `Paciente ${i} - Prontuário`,
  //     };

  //     paciente.planoGroup = {
  //       plano: 'Plano de Saúde',
  //       carteira: `1234 5678 9012 345${i}`,
  //       titular: `Titular ${i}`,
  //       cpfTitular: `987.654.321-${i}`,
  //     };

  //     paciente.enderecoGroup = {
  //       cep: 12345 - 10 + i,
  //       rua: `Rua ${i}`,
  //       bairro: `Bairro ${i}`,
  //       cidade: `Cidade ${i}`,
  //       estado: 'SP',
  //     };

  //     this.listaPacientes.push(paciente);
  //   }
  // }

  
  

}
