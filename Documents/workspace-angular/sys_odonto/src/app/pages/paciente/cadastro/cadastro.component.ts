import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PacienteService } from '../paciente.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']

})
export class CadastroComponent implements OnInit {

  ngOnInit() {

  }

  matcher = new MyErrorStateMatcher();
  paciente: any;

  constructor(
    private fb: FormBuilder,
    private service: PacienteService,
    // @Inject(MAT_DIALOG_DATA) public data: MeusDados //para editar
  ) { }

  formCadastroPaciente = this.fb.group({
    paciente: this.fb.group({
      pacienteGroup: this.fb.group({
        id: [Math.floor(Math.random() * (50 - 10 + 1)) + 10],
        nome: ['', Validators.required],
        sexo: [''],
        dataNascimento: [''],
        cpf: [''],
        rg: [''],
        celular: [''],
      }),
      responsavelGroup: this.fb.group({
        nome: [''],
        sexo: [''],
        dataNascimento: [''],
        cpf: [''],
        celular: [''],
        obs: ['']
      }),
      adicionaisGroup: this.fb.group({
        email: ['', Validators.email],
        telefone: [''],
        comoConheceu: [''],
        prontuario: ['']
      }),
      planoGroup: this.fb.group({
        plano: [''],
        carteira: [''],
        titular: [''],
        cpfTitular: ['']
      }),
      enderecoGroup: this.fb.group({
        cep: [''],
        rua: [''],
        bairro: [''],
        cidade: [''],
        estado: ['']
      })
    })
  });

  // formGroup: FormGroup = this.formCadastroPaciente;



  comoConheceuOptions = [
    'Instagram',
    'Facebook',
    'Google',
    'Outdoor',
    'Rádio',
    'TV',
    'Convênio',
    'Indicação de amigo',
    'Indicação familiar',
    'Indicação de outro profissional',
    'Site',
    'Outro'
  ];

  planoOptions = [
    'Particular'
  ]

  estadoOptions = [
    {
      "nome": "Acre",
      "sigla": "AC"
    },
    {
      "nome": "Alagoas",
      "sigla": "AL"
    },
    {
      "nome": "Amapá",
      "sigla": "AP"
    },
    {
      "nome": "Amazonas",
      "sigla": "AM"
    },
    {
      "nome": "Bahia",
      "sigla": "BA"
    },
    {
      "nome": "Ceará",
      "sigla": "CE"
    },
    {
      "nome": "Distrito Federal",
      "sigla": "DF"
    },
    {
      "nome": "Espírito Santo",
      "sigla": "ES"
    },
    {
      "nome": "Goiás",
      "sigla": "GO"
    },
    {
      "nome": "Maranhão",
      "sigla": "MA"
    },
    {
      "nome": "Mato Grosso",
      "sigla": "MT"
    },
    {
      "nome": "Mato Grosso do Sul",
      "sigla": "MS"
    },
    {
      "nome": "Minas Gerais",
      "sigla": "MG"
    },
    {
      "nome": "Pará",
      "sigla": "PA"
    },
    {
      "nome": "Paraíba",
      "sigla": "PB"
    },
    {
      "nome": "Paraná",
      "sigla": "PR"
    },
    {
      "nome": "Pernambuco",
      "sigla": "PE"
    },
    {
      "nome": "Piauí",
      "sigla": "PI"
    },
    {
      "nome": "Rio de Janeiro",
      "sigla": "RJ"
    },
    {
      "nome": "Rio Grande do Norte",
      "sigla": "RN"
    },
    {
      "nome": "Rio Grande do Sul",
      "sigla": "RS"
    },
    {
      "nome": "Rondônia",
      "sigla": "RO"
    },
    {
      "nome": "Roraima",
      "sigla": "RR"
    },
    {
      "nome": "Santa Catarina",
      "sigla": "SC"
    },
    {
      "nome": "São Paulo",
      "sigla": "SP"
    },
    {
      "nome": "Sergipe",
      "sigla": "SE"
    },
    {
      "nome": "Tocantins",
      "sigla": "TO"
    }
  ]


  updateProfile() {
    this.formCadastroPaciente.patchValue({
      // nome: 'Nancy',
      // address: {
      //   street: '123 Drew Street'
      // }
    });
  }

  onSubmit() {
    // console.log(this.formCadastroPaciente.value);  
    //this.service.listaPacientes.push(this.formCadastroPaciente.value);  
    // this.service.listaPacientes.push({      
    //     "id": 50,
    //     "nome": this.formCadastroPaciente.value.nome,
    //     "telefone": this.formCadastroPaciente.value.celular,
    //     "email": this.formCadastroPaciente.value.adicionaisGroup.email
    // })
  }

  cap(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

}
