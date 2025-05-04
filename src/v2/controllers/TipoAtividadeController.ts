import { Request, Response } from 'express';

export class TipoAtividadeV2Controller {
    public static async getTiposAtividade(_: Request, res: Response): Promise<void> {
        res.json([
            {
                id: 1,
                uuid: 'uuid-tipo-atividade-1',
                nome: 'Inspeção Visual',
                aprId: 1,
                checklistId: 1,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },
            {
                id: 2,
                uuid: 'uuid-tipo-atividade-2',
                nome: 'Teste Funcional',
                aprId: 2,
                checklistId: 2,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },

            {
                id: 3,
                uuid: 'uuid-tipo-atividade-3',
                nome: 'Teste Funcional',
                tipoAtividadeMobile: 'prevBcBat',
                aprId: 2,
                checklistId: 2,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },
            {
                id: 4,
                uuid: 'uuid-tipo-atividade-4',
                nome: 'Inspeção de Disjuntor',
                tipoAtividadeMobile: 'prevDisjuntor',
                aprId: 2,
                checklistId: 2,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },
        ]);
    }
}