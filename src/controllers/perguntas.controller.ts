import { Request, Response } from 'express';

export const listarPerguntas = async (req: Request, res: Response) => {
    try {
        const perguntas = [
            // Perguntas para APR 1 (Inspeção Termográfica)
            {
                id: 1,
                texto: "O equipamento está desenergizado?",
                apr_id: 1,
                ativo: true
            },
            {
                id: 2,
                texto: "Foi realizada a sinalização adequada?",
                apr_id: 1,
                ativo: true
            },
            {
                id: 3,
                texto: "O equipamento está aterrado?",
                apr_id: 1,
                ativo: true
            },
            // Perguntas para APR 2 (Manutenção Preventiva)
            {
                id: 4,
                texto: "Todos os EPIs necessários estão disponíveis?",
                apr_id: 2,
                ativo: true
            },
            {
                id: 5,
                texto: "A equipe está treinada para a atividade?",
                apr_id: 2,
                ativo: true
            },
            {
                id: 6,
                texto: "As ferramentas estão em boas condições?",
                apr_id: 2,
                ativo: true
            },
            // Perguntas para APR 3 (Inspeção Visual)
            {
                id: 7,
                texto: "A área está livre de obstáculos?",
                apr_id: 3,
                ativo: true
            },
            {
                id: 8,
                texto: "A iluminação está adequada?",
                apr_id: 3,
                ativo: true
            },
            {
                id: 9,
                texto: "O acesso ao equipamento está seguro?",
                apr_id: 3,
                ativo: true
            },
            // Perguntas para APR 4 (Teste de Operação)
            {
                id: 10,
                texto: "O sistema de bloqueio está funcionando?",
                apr_id: 4,
                ativo: true
            },
            {
                id: 11,
                texto: "Os procedimentos de teste estão disponíveis?",
                apr_id: 4,
                ativo: true
            },
            {
                id: 12,
                texto: "A equipe está usando os EPIs corretos?",
                apr_id: 4,
                ativo: true
            },
            // Perguntas para APR 5 (Inspeção Geral)
            {
                id: 13,
                texto: "O equipamento está em condições de operação?",
                apr_id: 5,
                ativo: true
            },
            {
                id: 14,
                texto: "Existem vazamentos ou danos visíveis?",
                apr_id: 5,
                ativo: true
            },
            {
                id: 15,
                texto: "Os indicadores estão funcionando?",
                apr_id: 5,
                ativo: true
            },
            // Perguntas para APR 6 (Manutenção Corretiva)
            {
                id: 16,
                texto: "O diagnóstico do problema foi confirmado?",
                apr_id: 6,
                ativo: true
            },
            {
                id: 17,
                texto: "As peças de reposição estão disponíveis?",
                apr_id: 6,
                ativo: true
            },
            {
                id: 18,
                texto: "O tempo estimado de reparo foi calculado?",
                apr_id: 6,
                ativo: true
            }
        ];

        res.json({ perguntas });
    } catch (error) {
        console.error('Erro ao listar perguntas:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
}; 