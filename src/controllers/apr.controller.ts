import { Request, Response } from 'express';

export const listarPerguntasAPR = async (req: Request, res: Response) => {
    try {
        const apr = {
            id: 1,
            nome: "APR Padrão",
            descricao: "Análise Preliminar de Risco padrão para atividades",
            ativo: true,
            perguntas: [
                {
                    id: 1,
                    pergunta: "O trabalho foi planejado e programado?",
                    ordem: 1,
                    ativo: true
                },
                {
                    id: 2,
                    pergunta: "Os riscos foram identificados e analisados?",
                    ordem: 2,
                    ativo: true
                },
                {
                    id: 3,
                    pergunta: "As medidas de controle foram implementadas?",
                    ordem: 3,
                    ativo: true
                },
                {
                    id: 4,
                    pergunta: "Os EPIs necessários estão disponíveis?",
                    ordem: 4,
                    ativo: true
                },
                {
                    id: 5,
                    pergunta: "Os EPCs necessários estão disponíveis?",
                    ordem: 5,
                    ativo: true
                },
                {
                    id: 6,
                    pergunta: "A equipe está treinada e qualificada?",
                    ordem: 6,
                    ativo: true
                },
                {
                    id: 7,
                    pergunta: "O local de trabalho está sinalizado?",
                    ordem: 7,
                    ativo: true
                },
                {
                    id: 8,
                    pergunta: "As ferramentas e equipamentos estão em boas condições?",
                    ordem: 8,
                    ativo: true
                },
                {
                    id: 9,
                    pergunta: "O ambiente de trabalho está adequado?",
                    ordem: 9,
                    ativo: true
                },
                {
                    id: 10,
                    pergunta: "As condições climáticas são favoráveis?",
                    ordem: 10,
                    ativo: true
                },
                {
                    id: 11,
                    pergunta: "O acesso ao local está seguro?",
                    ordem: 11,
                    ativo: true
                },
                {
                    id: 12,
                    pergunta: "A comunicação está estabelecida?",
                    ordem: 12,
                    ativo: true
                },
                {
                    id: 13,
                    pergunta: "Os procedimentos de emergência estão definidos?",
                    ordem: 13,
                    ativo: true
                },
                {
                    id: 14,
                    pergunta: "Os equipamentos de proteção coletiva estão instalados?",
                    ordem: 14,
                    ativo: true
                },
                {
                    id: 15,
                    pergunta: "A equipe está ciente dos riscos?",
                    ordem: 15,
                    ativo: true
                },
                {
                    id: 16,
                    pergunta: "Os procedimentos de trabalho estão claros?",
                    ordem: 16,
                    ativo: true
                },
                {
                    id: 17,
                    pergunta: "A área de trabalho está isolada?",
                    ordem: 17,
                    ativo: true
                }
            ]
        };

        res.json(apr);
    } catch (error) {
        console.error('Erro ao listar perguntas da APR:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

export const listarAPRs = async (req: Request, res: Response) => {
    try {
        const aprs = [
            {
                id: 1,
                nome: "APR Inspeção Termográfica",
                descricao: "Análise Preliminar de Risco para Inspeção Termográfica"
            },
            {
                id: 2,
                nome: "APR Manutenção Preventiva",
                descricao: "Análise Preliminar de Risco para Manutenção Preventiva"
            },
            {
                id: 3,
                nome: "APR Inspeção Visual",
                descricao: "Análise Preliminar de Risco para Inspeção Visual"
            },
            {
                id: 4,
                nome: "APR Teste de Operação",
                descricao: "Análise Preliminar de Risco para Teste de Operação"
            },
            {
                id: 5,
                nome: "APR Inspeção Geral",
                descricao: "Análise Preliminar de Risco para Inspeção Geral"
            },
            {
                id: 6,
                nome: "APR Manutenção Corretiva",
                descricao: "Análise Preliminar de Risco para Manutenção Corretiva"
            }
        ];

        res.json(aprs);
    } catch (error) {
        console.error('Erro ao listar APRs:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
}; 