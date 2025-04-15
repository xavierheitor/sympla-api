import { Request, Response } from 'express';

export const listarAtividades = async (req: Request, res: Response) => {
    try {
        const atividades = [
            {
                id: "1",
                titulo: "Inspeção Termográfica",
                ordem_servico: "OS-2024-001",
                nota_sap: "NOTA-2024-001",
                descricao: "Realizar inspeção termográfica na subestação",
                data_limite: "2024-04-15T17:00:00Z",
                subestacao: "ABU",
                equipamento_id: "1",
                status: "pendente",
                iniciado_em: null,
                finalizado_em: null,
                tipo_atividade_id: "1"
            },
            {
                id: "2",
                titulo: "Manutenção Preventiva",
                ordem_servico: "OS-2024-002",
                nota_sap: "NOTA-2024-002",
                descricao: "Realizar manutenção preventiva no transformador",
                data_limite: "2024-04-16T17:00:00Z",
                subestacao: "MOR",
                equipamento_id: "3",
                status: "pendente",
                iniciado_em: null,
                finalizado_em: null,
                tipo_atividade_id: "2"
            },
            {
                id: "3",
                titulo: "Inspeção Visual",
                ordem_servico: "OS-2024-003",
                nota_sap: "NOTA-2024-003",
                descricao: "Realizar inspeção visual nos equipamentos",
                data_limite: "2024-04-17T17:00:00Z",
                subestacao: "BTZ",
                equipamento_id: "5",
                status: "pendente",
                iniciado_em: null,
                finalizado_em: null,
                tipo_atividade_id: "3"
            },
            {
                id: "4",
                titulo: "Teste de Operação",
                ordem_servico: "5436",
                nota_sap: "543654365436",
                descricao: "Realizar teste de operação no disjuntor CNO-S-013-SAIDA 2-224",
                data_limite: "2024-04-18T17:00:00Z",
                subestacao: "MOR",
                equipamento_id: "4",
                status: "pendente",
                iniciado_em: null,
                finalizado_em: null,
                tipo_atividade_id: "1"
            },
            {
                id: "5",
                titulo: "Inspeção Geral",
                ordem_servico: "5436",
                nota_sap: "543654365436",
                descricao: "Realizar inspeção geral no equipamento ORI-D",
                data_limite: "2024-04-19T17:00:00Z",
                subestacao: "ORI",
                equipamento_id: "5",
                status: "pendente",
                iniciado_em: null,
                finalizado_em: null,
                tipo_atividade_id: "1"
            },
            {
                id: "6",
                titulo: "Manutenção Corretiva",
                ordem_servico: "5436",
                nota_sap: "543654365436",
                descricao: "Realizar manutenção corretiva no equipamento BTZ-D",
                data_limite: "2024-04-20T17:00:00Z",
                subestacao: "BTZ",
                equipamento_id: "6",
                status: "pendente",
                iniciado_em: null,
                finalizado_em: null,
                tipo_atividade_id: "1"
            }
        ]

        res.json({ atividades });
    } catch (error) {
        console.error('Erro ao listar atividades:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
};