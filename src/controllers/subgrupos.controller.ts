import { Request, Response } from 'express';

export const listarSubgrupos = async (req: Request, res: Response) => {
    try {
        const subgrupos = [
            {
                id: "1",
                nome: "Defeitos Elétricos"
            },
            {
                id: "2",
                nome: "Defeitos Mecânicos"
            },
            {
                id: "3",
                nome: "Defeitos Térmicos"
            },
            {
                id: "4",
                nome: "Defeitos de Isolamento"
            }
        ];

        res.json({ subgrupos });
    } catch (error) {
        console.error('Erro ao listar subgrupos:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
}; 