import { PerguntaInterface } from "./pergunta.interface";

export interface ModeloAnamneseInterface{
    id: number,
    nome: string,
    perguntas: {
        ativa: boolean,
        pergunta: PerguntaInterface
    }[]
}