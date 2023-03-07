import { TipoPergunta } from "./tipoPergunta.enum"

export interface PerguntaInterface {
    id: number,
    texto: string,
    tipo: TipoPergunta,
    textoAuxiliar: string,
    comAlerta: boolean,
    alerta: {
        quando: any,
        nomeAlerta: string
    },
    modelos: number[]
}