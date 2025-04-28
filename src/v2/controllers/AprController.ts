import { Request, Response } from 'express';

export class AprV2Controller {
    public static async getAprs(_: Request, res: Response): Promise<void> {
        res.json([
            {
                id: 1,
                uuid: 'uuid-apr-1',
                nome: 'APR - Manutenção de Transformador',
                descricao: 'Análise de riscos para manutenção preventiva de transformadores.',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },
            {
                id: 2,
                uuid: 'uuid-apr-2',
                nome: 'APR - Troca de Disjuntor',
                descricao: 'Procedimentos de segurança para substituição de disjuntores.',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },
        ]);
    }

    public static async getAprPerguntas(_: Request, res: Response): Promise<void> {
        res.json([
            { id: 1, uuid: 'uuid-pergunta-1', texto: 'Os EPIs adequados estão sendo utilizados?', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
            { id: 2, uuid: 'uuid-pergunta-2', texto: 'Os colaboradores foram treinados para a atividade?', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
            { id: 3, uuid: 'uuid-pergunta-3', texto: 'A área de trabalho está devidamente isolada?', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
            { id: 4, uuid: 'uuid-pergunta-4', texto: 'As ferramentas foram inspecionadas antes do uso?', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
            { id: 5, uuid: 'uuid-pergunta-5', texto: 'Existe risco de queda de materiais na área?', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
            { id: 6, uuid: 'uuid-pergunta-6', texto: 'Todos os procedimentos de bloqueio estão aplicados?', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
        ]);
    }

    public static async getAprPerguntasRelacionamentos(_: Request, res: Response): Promise<void> {
        res.json([
            { id: 1, uuid: 'uuid-relacionamento-1', aprId: 1, perguntaId: 1, ordem: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
            { id: 2, uuid: 'uuid-relacionamento-2', aprId: 1, perguntaId: 2, ordem: 2, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
            { id: 3, uuid: 'uuid-relacionamento-3', aprId: 1, perguntaId: 3, ordem: 3, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
            { id: 4, uuid: 'uuid-relacionamento-4', aprId: 2, perguntaId: 4, ordem: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
            { id: 5, uuid: 'uuid-relacionamento-5', aprId: 2, perguntaId: 5, ordem: 2, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
            { id: 6, uuid: 'uuid-relacionamento-6', aprId: 2, perguntaId: 6, ordem: 3, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
        ]);
    }
}