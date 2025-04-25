import { Request, Response } from 'express';

export class SubgruposV2Controller {
    public static async getSubgrupos(_: Request, res: Response): Promise<void> {
        res.json([
            {
                id: 1,
                uuid: 'uuid-subgrupo-1',
                nome: 'Isolamento',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },
            {
                id: 2,
                uuid: 'uuid-subgrupo-2',
                nome: 'Contato Elétrico',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },
        ]);
    }
}