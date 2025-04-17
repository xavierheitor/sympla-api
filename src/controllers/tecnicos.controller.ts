import { Request, Response } from 'express';

export const listarTecnicos = async (req: Request, res: Response) => {
    try {
        const tecnicos = [
            {
                id: 1,
                nome: "João Silva",
                matricula: "12345"
            },
            {
                id: 2,
                nome: "Maria Santos",
                matricula: "67890"
            },
            {
                id: 3,
                nome: "Pedro Oliveira",
                matricula: "54321"
            },
            {
                id: 4,
                nome: "Ana Costa",
                matricula: "09876"
            },
            {
                id: 5,
                nome: "Carlos Pereira",
                matricula: "13579"
            }
        ];

        res.json({ tecnicos });
    } catch (error) {
        console.error('Erro ao listar técnicos:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
}; 