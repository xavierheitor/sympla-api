import { Request, Response } from 'express';

// Lista todos os checklists
export const listarChecklists = async (req: Request, res: Response) => {
    try {
        const checklists = [
            {
                id: 1,
                nome: "Checklist Inspeção Termográfica",
                descricao: "Checklist para inspeção termográfica de equipamentos"
            },
            {
                id: 2,
                nome: "Checklist Manutenção Preventiva",
                descricao: "Checklist para manutenção preventiva de equipamentos"
            },
            {
                id: 3,
                nome: "Checklist Inspeção Visual",
                descricao: "Checklist para inspeção visual de equipamentos"
            },
            {
                id: 4,
                nome: "Checklist Teste de Operação",
                descricao: "Checklist para teste de operação de equipamentos"
            },
            {
                id: 5,
                nome: "Checklist Inspeção Geral",
                descricao: "Checklist para inspeção geral de equipamentos"
            },
            {
                id: 6,
                nome: "Checklist Manutenção Corretiva",
                descricao: "Checklist para manutenção corretiva de equipamentos"
            }
        ];

        res.json({ checklists });
    } catch (error) {
        console.error('Erro ao listar checklists:', error);
        res.status(500).json({ error: 'Erro ao listar checklists' });
    }
};

// Lista todos os grupos de perguntas
export const listarGruposPerguntas = async (req: Request, res: Response) => {
    try {
        const grupos = [
            {
                id: 1,
                nome: "Transformador",
                checklistId: 1,
                ordem: 1
            },
            {
                id: 2,
                nome: "Disjuntor",
                checklistId: 1,
                ordem: 2
            },
            {
                id: 3,
                nome: "Inspeção Visual",
                checklistId: 2,
                ordem: 1
            },
            {
                id: 4,
                nome: "Testes",
                checklistId: 2,
                ordem: 2
            },
            {
                id: 5,
                nome: "Inspeção Geral",
                checklistId: 3,
                ordem: 1
            },
            {
                id: 6,
                nome: "Testes de Operação",
                checklistId: 4,
                ordem: 1
            },
            {
                id: 7,
                nome: "Verificações Gerais",
                checklistId: 5,
                ordem: 1
            },
            {
                id: 8,
                nome: "Manutenção",
                checklistId: 6,
                ordem: 1
            }
        ];

        res.json({ grupos });
    } catch (error) {
        console.error('Erro ao listar grupos de perguntas:', error);
        res.status(500).json({ error: 'Erro ao listar grupos de perguntas' });
    }
};

// Lista todos as perguntas
export const listarPerguntas = async (req: Request, res: Response) => {
    try {
        const perguntas = [
            {
                id: 1,
                pergunta: "Verificar temperatura do transformador",
                grupoId: 1,
                ordem: 1
            },
            {
                id: 2,
                pergunta: "Verificar temperatura dos terminais",
                grupoId: 1,
                ordem: 2
            },
            {
                id: 3,
                pergunta: "Verificar temperatura dos contatos",
                grupoId: 2,
                ordem: 1
            },
            {
                id: 4,
                pergunta: "Verificar temperatura dos bornes",
                grupoId: 2,
                ordem: 2
            },
            {
                id: 5,
                pergunta: "Verificar vazamentos",
                grupoId: 3,
                ordem: 1
            },
            {
                id: 6,
                pergunta: "Verificar corrosão",
                grupoId: 3,
                ordem: 2
            },
            {
                id: 7,
                pergunta: "Verificar pressão do gás",
                grupoId: 4,
                ordem: 1
            },
            {
                id: 8,
                pergunta: "Verificar nível de óleo",
                grupoId: 4,
                ordem: 2
            },
            {
                id: 9,
                pergunta: "Verificar estado geral do equipamento",
                grupoId: 5,
                ordem: 1
            },
            {
                id: 10,
                pergunta: "Verificar funcionamento dos sistemas",
                grupoId: 5,
                ordem: 2
            },
            {
                id: 11,
                pergunta: "Testar operação manual",
                grupoId: 6,
                ordem: 1
            },
            {
                id: 12,
                pergunta: "Testar operação automática",
                grupoId: 6,
                ordem: 2
            },
            {
                id: 13,
                pergunta: "Verificar condições gerais",
                grupoId: 7,
                ordem: 1
            },
            {
                id: 14,
                pergunta: "Verificar documentação",
                grupoId: 7,
                ordem: 2
            },
            {
                id: 15,
                pergunta: "Verificar defeitos reportados",
                grupoId: 8,
                ordem: 1
            },
            {
                id: 16,
                pergunta: "Realizar correções necessárias",
                grupoId: 8,
                ordem: 2
            }
        ];

        res.json({ perguntas });
    } catch (error) {
        console.error('Erro ao listar perguntas:', error);
        res.status(500).json({ error: 'Erro ao listar perguntas' });
    }
};

// Lista atividades de checklist
export const listarChecklistAtividades = async (req: Request, res: Response) => {
    try {
        const atividades = [
            {
                id: 1,
                atividadeId: 1,
                usuarioId: 1,
                dataInicio: "2024-03-20T10:00:00Z",
                dataFim: null
            },
            {
                id: 2,
                atividadeId: 2,
                usuarioId: 1,
                dataInicio: "2024-03-20T11:00:00Z",
                dataFim: "2024-03-20T12:00:00Z"
            },
            {
                id: 3,
                atividadeId: 3,
                usuarioId: 1,
                dataInicio: "2024-03-20T13:00:00Z",
                dataFim: null
            },
            {
                id: 4,
                atividadeId: 4,
                usuarioId: 1,
                dataInicio: "2024-03-20T14:00:00Z",
                dataFim: null
            },
            {
                id: 5,
                atividadeId: 5,
                usuarioId: 1,
                dataInicio: "2024-03-20T15:00:00Z",
                dataFim: null
            },
            {
                id: 6,
                atividadeId: 6,
                usuarioId: 1,
                dataInicio: "2024-03-20T16:00:00Z",
                dataFim: null
            }
        ];

        res.json({ atividades });
    } catch (error) {
        console.error('Erro ao listar atividades de checklist:', error);
        res.status(500).json({ error: 'Erro ao listar atividades de checklist' });
    }
}; 