import { Request, Response } from 'express';

export const listarGrupos = async (req: Request, res: Response) => {
    try {
        const grupos = [
            {
                id: "1",
                nome: "Transformadores"
            },
            {
                id: "2",
                nome: "Disjuntores"
            },
            {
                id: "3",
                nome: "Chaves Seccionadoras"
            },
            {
                id: "4",
                nome: "Para-Raios"
            }
        ];

        res.json({ grupos });
    } catch (error) {
        console.error('Erro ao listar grupos:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
}; 