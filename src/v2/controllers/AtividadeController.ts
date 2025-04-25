import { Request, Response } from 'express';

export class AtividadesV2Controller {
    public static async getAtividades(_: Request, res: Response): Promise<void> {
        res.json([
            {
                id: 1,
                uuid: 'uuid-atividade-1',
                titulo: 'Inspeção de Transformador',
                ordemServico: 'OS-001',
                descricao: 'Verificar estado geral do equipamento',
                dataLimite: new Date(Date.now() + 3 * 86400000).toISOString(), // 3 dias
                subestacao: 'MOR',
                status: 'pendente',
                dataInicio: new Date().toISOString(),
                dataFim: new Date(Date.now() + 3600000).toISOString(), // 1h depois
                tipoAtividadeId: 1,
                equipamentoId: 1,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },
            {
                id: 2,
                uuid: 'uuid-atividade-2',
                titulo: 'Troca de Peça',
                ordemServico: 'OS-002',
                descricao: 'Substituir peça danificada',
                dataLimite: new Date(Date.now() + 2 * 86400000).toISOString(), // 2 dias
                subestacao: 'ORI',
                status: 'pendente',
                dataInicio: new Date().toISOString(),
                dataFim: new Date(Date.now() + 3600000).toISOString(), // 1h depois
                tipoAtividadeId: 2,
                equipamentoId: 2,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },
            {
                id: 3,
                uuid: 'uuid-atividade-3',
                titulo: 'Inspeção de Disjuntor',
                ordemServico: 'OS-003',
                descricao: 'Verificar estado geral do equipamento',
                dataLimite: new Date(Date.now() + 4 * 86400000).toISOString(), // 4 dias
                subestacao: 'MOR',
                status: 'pendente',
                dataInicio: new Date().toISOString(),
                dataFim: new Date(Date.now() + 3600000).toISOString(), // 1h depois
                tipoAtividadeId: 1,
                equipamentoId: 1,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            }
        ]);
    }
}