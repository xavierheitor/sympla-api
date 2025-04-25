import { Request, Response } from 'express';

export class EquipamentosV2Controller {
    public static async getEquipamentos(_: Request, res: Response): Promise<void> {
        res.json([
            {
                id: 1,
                uuid: 'uuid-equipamento-1',
                nome: 'Transformador T1',
                descricao: 'Transformador principal',
                subestacao: 'MOR',
                grupoId: 1,
                subgrupoId: 1,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },
            {
                id: 2,
                uuid: 'uuid-equipamento-2',
                nome: 'Disjuntor D1',
                descricao: 'Disjuntor de entrada',
                subestacao: 'ORI',
                grupoId: 2,
                subgrupoId: 2,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },
        ]);
    }
}