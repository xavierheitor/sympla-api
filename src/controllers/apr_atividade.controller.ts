import { Request, Response } from 'express';

export const listarAtividadesApr = async (req: Request, res: Response) => {
    try {
        const atividades = [
            {
                id: "1",
                atividade_id: "1",
                usuario_id: "1",
                data_inicio: "2024-04-15T10:00:00Z",
                data_fim: null
            },
            {
                id: "2",
                atividade_id: "2",
                usuario_id: "1",
                data_inicio: "2024-04-15T11:00:00Z",
                data_fim: null
            },
            {
                id: "3",
                atividade_id: "3",
                usuario_id: "1",
                data_inicio: "2024-04-15T12:00:00Z",
                data_fim: null
            }
        ];

        res.json({ apr_atividades: atividades });
    } catch (error) {
        console.error('Erro ao listar atividades da APR:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
}; 