import { Request, Response } from 'express';

export class DefeitoV2Controller {
    public static async getDefeitos(_: Request, res: Response): Promise<void> {
        res.json([
            // Grupo 1: Mecânico
            {
                id: 1,
                uuid: 'uuid-defeito-1',
                grupo_id: 1,
                subgrupo_id: 1,
                codigo_sap: 'ME001',
                descricao: 'Fissura em isolador',
                prioridade: 'P1',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
            },
            {
                id: 2,
                uuid: 'uuid-defeito-2',
                grupo_id: 1,
                subgrupo_id: 1,
                codigo_sap: 'ME002',
                descricao: 'Trinca no suporte mecânico',
                prioridade: 'P2',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
            },
            {
                id: 3,
                uuid: 'uuid-defeito-3',
                grupo_id: 1,
                subgrupo_id: 2,
                codigo_sap: 'ME003',
                descricao: 'Oxidação nos contatos',
                prioridade: 'A',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
            },

            // Grupo 2: Elétrico
            {
                id: 4,
                uuid: 'uuid-defeito-4',
                grupo_id: 2,
                subgrupo_id: 3,
                codigo_sap: 'EL001',
                descricao: 'Curto entre fases',
                prioridade: 'P1',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
            },
            {
                id: 5,
                uuid: 'uuid-defeito-5',
                grupo_id: 2,
                subgrupo_id: 4,
                codigo_sap: 'EL002',
                descricao: 'Conexão solta em borne',
                prioridade: 'P2',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
            },
            {
                id: 6,
                uuid: 'uuid-defeito-6',
                grupo_id: 2,
                subgrupo_id: 4,
                codigo_sap: 'EL003',
                descricao: 'Fuga de corrente em painel',
                prioridade: 'A',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
            },
            {
                id: 7,
                uuid: 'uuid-defeito-5',
                grupo_id: 2,
                subgrupo_id: 2,
                codigo_sap: 'EL002',
                descricao: 'Conexão solta em borne',
                prioridade: 'P2',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
            },
            {
                id: 8,
                uuid: 'uuid-defeito-6',
                grupo_id: 2,
                subgrupo_id: 2,
                codigo_sap: 'EL003',
                descricao: 'Fuga de corrente em painel',
                prioridade: 'A',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
            },
        ]);
    }
}
