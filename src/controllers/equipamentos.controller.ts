import { Request, Response } from 'express';

export const listarEquipamentos = async (req: Request, res: Response) => {
    try {
        const equipamentos = [
            {
                id: "1",
                nome: "TRANSFORMADOR 1",
                subestacao: "ABU",
                grupo_id: "1",
                subgrupo_id: "1"
            },
            {
                id: "2",
                nome: "TRANSFORMADOR 2",
                subestacao: "ABU",
                grupo_id: "1",
                subgrupo_id: "1"
            },
            {
                id: "3",
                nome: "DISJUNTOR 1",
                subestacao: "MOR",
                grupo_id: "2",
                subgrupo_id: "2"
            },
            {
                id: "4",
                nome: "DISJUNTOR 2",
                subestacao: "MOR",
                grupo_id: "2",
                subgrupo_id: "2"
            },
            {
                id: "5",
                nome: "CHAVE SECCIONADORA 1",
                subestacao: "BTZ",
                grupo_id: "3",
                subgrupo_id: "3"
            },
            {
                id: "6",
                nome: "CHAVE SECCIONADORA 2",
                subestacao: "BTZ",
                grupo_id: "3",
                subgrupo_id: "3"
            },
            {
                id: "7",
                nome: "PARA-RAIOS 1",
                subestacao: "ORI",
                grupo_id: "4",
                subgrupo_id: "4"
            },
            {
                id: "8",
                nome: "PARA-RAIOS 2",
                subestacao: "ORI",
                grupo_id: "4",
                subgrupo_id: "4"
            }
        ];

        res.json({ equipamentos });
    } catch (error) {
        console.error('Erro ao listar equipamentos:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
