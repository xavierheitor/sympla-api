import { Request, Response } from 'express';

export class AtividadeController {
    public static async getAtividades(req: Request, res: Response): Promise<void> {
        res.json([
            {
                id: 1,
                nome: 'Verificação de Equipamento',
                descricao: 'Verificar o estado do equipamento',
                tipo_atividade_id: 1,
                equipamento_id: 1,
                sincronizado: true,
            },
            {
                id: 2,
                nome: 'Troca de Peça',
                descricao: 'Substituir peça danificada',
                tipo_atividade_id: 2,
                equipamento_id: 2,
                sincronizado: true,
            },
        ]);
    }
}