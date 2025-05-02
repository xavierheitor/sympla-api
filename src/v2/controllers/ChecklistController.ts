import { Request, Response } from 'express';

export class ChecklistV2Controller {
    public static async getChecklists(_: Request, res: Response): Promise<void> {
        res.json([
            {
                id: 1,
                uuid: 'uuid-checklist-1',
                nome: 'Checklist de Segurança Elétrica',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
            },
            {
                id: 2,
                uuid: 'uuid-checklist-2',
                nome: 'Checklist de Equipamentos de Proteção',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
            },
        ]);
    }

    public static async getChecklistGrupos(_: Request, res: Response): Promise<void> {
        res.json([
            { id: 1, uuid: 'uuid-grupo-1', nome: 'Grupo A', checklist_id: 1, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { id: 2, uuid: 'uuid-grupo-2', nome: 'Grupo B', checklist_id: 2, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { id: 3, uuid: 'uuid-grupo-3', nome: 'Grupo C', checklist_id: 1, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
        ]);
    }

    public static async getChecklistSubgrupos(_: Request, res: Response): Promise<void> {
        res.json([
            { id: 1, uuid: 'uuid-subgrupo-1', nome: 'Subgrupo A1', grupo_id: 1, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { id: 2, uuid: 'uuid-subgrupo-2', nome: 'Subgrupo B1', grupo_id: 2, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { id: 3, uuid: 'uuid-subgrupo-3', nome: 'Subgrupo C1', grupo_id: 3, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
        ]);
    }

    public static async getChecklistPerguntas(_: Request, res: Response): Promise<void> {
        res.json([
            { id: 1, uuid: 'uuid-pergunta-1', pergunta: 'Todos os equipamentos estão devidamente aterrados?', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { id: 2, uuid: 'uuid-pergunta-2', pergunta: 'Os EPIs estão em boas condições de uso?', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { id: 3, uuid: 'uuid-pergunta-3', pergunta: 'Os quadros elétricos estão sinalizados?', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { id: 4, uuid: 'uuid-pergunta-4', pergunta: 'As ferramentas estão isoladas adequadamente?', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { id: 5, uuid: 'uuid-pergunta-5', pergunta: 'As proteções coletivas estão instaladas?', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { id: 6, uuid: 'uuid-pergunta-6', pergunta: 'Os colaboradores conhecem os riscos?', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { id: 7, uuid: 'uuid-pergunta-7', pergunta: 'O ambiente está limpo e organizado?', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { id: 8, uuid: 'uuid-pergunta-8', pergunta: 'Há sinalização de emergência visível?', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { id: 9, uuid: 'uuid-pergunta-9', pergunta: 'Todos possuem treinamento adequado?', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { id: 10, uuid: 'uuid-pergunta-10', pergunta: 'As saídas de emergência estão desobstruídas?', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { id: 11, uuid: 'uuid-pergunta-11', pergunta: 'Equipamentos estão identificados corretamente?', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { id: 12, uuid: 'uuid-pergunta-12', pergunta: 'Foi feito checklist visual da área?', created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
        ]);
    }

    public static async getChecklistPerguntasRelacionamentos(_: Request, res: Response): Promise<void> {
        res.json([
            // Checklist 1 - Grupo 1 - Subgrupo 1
            { id: 1, uuid: 'uuid-rel-1', checklist_id: 1, grupo_id: 1, subgrupo_id: 1, pergunta_id: 1, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { id: 2, uuid: 'uuid-rel-2', checklist_id: 1, grupo_id: 1, subgrupo_id: 1, pergunta_id: 3, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { id: 3, uuid: 'uuid-rel-3', checklist_id: 1, grupo_id: 1, subgrupo_id: 1, pergunta_id: 4, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { id: 4, uuid: 'uuid-rel-4', checklist_id: 1, grupo_id: 1, subgrupo_id: 1, pergunta_id: 5, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },

            // Checklist 1 - Grupo 3 - Subgrupo 3
            { id: 5, uuid: 'uuid-rel-5', checklist_id: 1, grupo_id: 3, subgrupo_id: 3, pergunta_id: 6, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { id: 6, uuid: 'uuid-rel-6', checklist_id: 1, grupo_id: 3, subgrupo_id: 3, pergunta_id: 7, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },

            // Checklist 2 - Grupo 2 - Subgrupo 2
            { id: 7, uuid: 'uuid-rel-7', checklist_id: 2, grupo_id: 2, subgrupo_id: 2, pergunta_id: 2, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { id: 8, uuid: 'uuid-rel-8', checklist_id: 2, grupo_id: 2, subgrupo_id: 2, pergunta_id: 8, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { id: 9, uuid: 'uuid-rel-9', checklist_id: 2, grupo_id: 2, subgrupo_id: 2, pergunta_id: 9, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { id: 10, uuid: 'uuid-rel-10', checklist_id: 2, grupo_id: 2, subgrupo_id: 2, pergunta_id: 10, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },

            // Checklist 2 - Grupo 3 - Subgrupo 3
            { id: 11, uuid: 'uuid-rel-11', checklist_id: 2, grupo_id: 3, subgrupo_id: 3, pergunta_id: 11, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
            { id: 12, uuid: 'uuid-rel-12', checklist_id: 2, grupo_id: 3, subgrupo_id: 3, pergunta_id: 12, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
        ]);
    }
}