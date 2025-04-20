import { Request, Response } from 'express';

// Lista todos os defeitos
export const listarDefeitos = async (req: Request, res: Response) => {
    try {
        const defeitos = [
            {
                id: 1,
                descricao: "Superaquecimento do Transformador",
                grupoId: 1,
                subgrupoId: 1,
                codigoSAP: "DEF001",
                prioridade: "A"
            },
            {
                id: 2,
                descricao: "Vazamento de Óleo",
                grupoId: 1,
                subgrupoId: 1,
                codigoSAP: "DEF002",
                prioridade: "P1"
            },
            {
                id: 3,
                descricao: "Contato Desgastado",
                grupoId: 2,
                subgrupoId: 2,
                codigoSAP: "DEF003",
                prioridade: "A"
            },
            {
                id: 4,
                descricao: "Mola Fraca",
                grupoId: 2,
                subgrupoId: 2,
                codigoSAP: "DEF004",
                prioridade: "P2"
            },
            {
                id: 5,
                descricao: "Isolador Danificado",
                grupoId: 3,
                subgrupoId: 3,
                codigoSAP: "DEF005",
                prioridade: "A"
            },
            {
                id: 6,
                descricao: "Corrosão nos Terminais",
                grupoId: 3,
                subgrupoId: 3,
                codigoSAP: "DEF006",
                prioridade: "P1"
            },
            {
                id: 7,
                descricao: "Pressão do Gás Baixa",
                grupoId: 4,
                subgrupoId: 4,
                codigoSAP: "DEF007",
                prioridade: "A"
            },
            {
                id: 8,
                descricao: "Nível de Óleo Baixo",
                grupoId: 4,
                subgrupoId: 4,
                codigoSAP: "DEF008",
                prioridade: "P1"
            }
        ];

        res.json({ defeitos });
    } catch (error) {
        console.error('Erro ao listar defeitos:', error);
        res.status(500).json({ error: 'Erro ao listar defeitos' });
    }
}; 