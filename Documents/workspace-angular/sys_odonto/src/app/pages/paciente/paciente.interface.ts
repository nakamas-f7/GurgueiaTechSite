export interface Paciente {
    paciente: {
        pacienteGroup: {
            id: number,
            nome: string,
            sexo: string,
            dataNascimento: any,
            cpf: string,
            rg: string,
            celular: string,
        }, responsavelGroup: {
            nome: string,
            sexo: string,
            dataNascimento: any,
            cpf: string,
            obs: string,
        },
        adicionaisGroup: {
            email: string,
            telefone: string,
            comoConheceu: string,
            prontuario: string,
        },
        planoGroup: {
            plano: string,
            carteira: string,
            titular: string,
            cpfTitular: string,
        },
        enderecoGroup: {
            cep: number,
            rua: string,
            bairro: string,
            cidade: string,
            estado: string,
        }

    }
}
