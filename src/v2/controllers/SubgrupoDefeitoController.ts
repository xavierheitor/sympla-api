import { Request, Response } from 'express';

export class SubgruposV2Controller {
    public static async getSubgrupos(_: Request, res: Response): Promise<void> {
        res.json([
            {
                id: 1,
                uuid: 'uuid-subgrupo-1',
                nome: 'Isolamento',
                grupoDefeitoId: 1,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },
            {
                id: 2,
                uuid: 'uuid-subgrupo-2',
                nome: 'Contato Elétrico',
                grupoDefeitoId: 1,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },
            {
                id: 3,
                uuid: 'uuid-subgrupo-3',
                nome: 'Contato Elétrico',
                grupoDefeitoId: 2,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },
            {
                id: 4,
                uuid: 'uuid-subgrupo-4',
                nome: 'Contato Elétrico',
                grupoDefeitoId: 2,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },
        ]);
    }
}