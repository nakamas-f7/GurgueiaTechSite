import { Injectable } from '@angular/core';
import { ModeloAnamneseInterface } from 'src/app/util/modelo.interface';
import { PerguntaInterface } from 'src/app/util/pergunta.interface';
import { TipoPergunta } from 'src/app/util/tipoPergunta.enum';

@Injectable({
  providedIn: 'root'
})
export class AnamneseService {

  constructor() { }

  perguntas: PerguntaInterface[] = [
    {
      id: 1,
      texto: "Você costuma praticar exercícios físicos regularmente?",
      tipo: TipoPergunta.SIM_NAO,
      textoAuxiliar: "",
      comAlerta: true,
      alerta: {
        quando: "Não",
        nomeAlerta: "Praticar exercícios regularmente pode trazer benefícios para a sua saúde."
      },
      modelos: [1, 3]
    },
    {
      id: 2,
      texto: "Qual a sua opinião sobre o uso de redes sociais?",
      tipo: TipoPergunta.SOMENTE_TEXTO,
      textoAuxiliar: "",
      comAlerta: false,
      alerta: {
        quando: null,
        nomeAlerta: ""
      },
      modelos: [1, 2, 3]
    },
    {
      id: 3,
      texto: "Você sabe o que é Machine Learning?",
      tipo: TipoPergunta.SIM_NAO_NAOSEI_TEXTO,
      textoAuxiliar: "Caso saiba, descreva em poucas palavras:",
      comAlerta: false,
      alerta: {
        quando: null,
        nomeAlerta: ""
      },
      modelos: [3]
    },
    {
      id: 4,
      texto: "Você se considera uma pessoa de esquerda, direita ou não sabe?",
      tipo: TipoPergunta.ESQUERDA_DIREITA_NAOSEI,
      textoAuxiliar: "",
      comAlerta: false,
      alerta: {
        quando: null,
        nomeAlerta: ""
      },
      modelos: [3, 4]
    },
    {
      id: 5,
      texto: "Você já visitou algum país estrangeiro?",
      tipo: TipoPergunta.SIM_NAO,
      textoAuxiliar: "",
      comAlerta: true,
      alerta: {
        quando: "Não",
        nomeAlerta: "Viajar para outros países pode ser uma experiência enriquecedora."
      },
      modelos: [1, 2, 3]
    },
    {
      id: 6,
      texto: "Qual sua opinião sobre o veganismo?",
      tipo: TipoPergunta.SOMENTE_TEXTO,
      textoAuxiliar: "",
      comAlerta: false,
      alerta: {
        quando: null,
        nomeAlerta: ""
      },
      modelos: [1, 2]
    }
  ];

  modelosAnamnese: ModeloAnamneseInterface[] = [
    {
      id: 1,
      nome: "Anamnese básica",
      perguntas: [
        {
          ativa: true,
          pergunta: this.perguntas[0]
        },
        {
          ativa: true,
          pergunta: this.perguntas[1]
        },
        {
          ativa: true,
          pergunta: this.perguntas[2]
        },
        {
          ativa: true,
          pergunta: this.perguntas[3]
        }
      ]
    },
    {
      id: 2,
      nome: "Anamnese estendida",
      perguntas: [
        {
          ativa: true,
          pergunta: this.perguntas[0]
        },
        {
          ativa: true,
          pergunta: this.perguntas[1]
        },
        {
          ativa: true,
          pergunta: this.perguntas[2]
        },
        {
          ativa: true,
          pergunta: this.perguntas[3]
        },
        {
          ativa: true,
          pergunta: this.perguntas[4]
        },
        {
          ativa: true,
          pergunta: this.perguntas[5]
        }
      ]
    },
    {
      id: 3,
      nome: "Anamnese simplificada",
      perguntas: [
        {
          ativa: true,
          pergunta: this.perguntas[0]
        },
        {
          ativa: true,
          pergunta: this.perguntas[1]
        },
        {
          ativa: false,
          pergunta: this.perguntas[2]
        },
        {
          ativa: false,
          pergunta: this.perguntas[3]
        }
      ]
    },
    {
      id: 4,
      nome: "Anamnese personalizada",
      perguntas: [
        {
          ativa: false,
          pergunta: this.perguntas[0]
        },
        {
          ativa: false,
          pergunta: this.perguntas[1]
        },
        {
          ativa: true,
          pergunta: this.perguntas[2]
        },
        {
          ativa: true,
          pergunta: this.perguntas[3]
        },
        {
          ativa: false,
          pergunta: this.perguntas[4]
        },
        {
          ativa: false,
          pergunta: this.perguntas[5]
        }
      ]
    }
  ];


}
