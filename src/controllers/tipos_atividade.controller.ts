import { Request, Response } from 'express';

export const listarTiposAtividade = async (req: Request, res: Response) => {
    try {
        const tipos_atividade = [
            {
                id: 1,
                nome: "Inspeção Termográfica",
                apr_id: 1,
                checklist_id: 1,
                tipo_atividade_mobile: 'ivItIu'
            },
            {
                id: 2,
                nome: "Manutenção Preventiva",
                apr_id: 2,
                checklist_id: 2,
                tipo_atividade_mobile: 'ivItIu'
            },
            {
                id: 3,
                nome: "Inspeção Visual",
                apr_id: 3,
                checklist_id: 3,
                tipo_atividade_mobile: 'ivItIu'
            },
            {
                id: 4,
                nome: "Teste de Operação",
                apr_id: 4,
                checklist_id: 4,
                tipo_atividade_mobile: 'ivItIu'
            },
            {
                id: 5,
                nome: "Inspeção Geral",
                apr_id: 5,
                checklist_id: 5,
                tipo_atividade_mobile: 'ivItIu'
            },
            {
                id: 6,
                nome: "Manutenção Corretiva",
                apr_id: 6,
                checklist_id: 6,
                tipo_atividade_mobile: 'ivItIu'
            }
        ];

        res.json({ tipos_atividade });
    } catch (error) {
        console.error('Erro ao listar tipos de atividade:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
};