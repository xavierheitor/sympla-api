import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    try {
        // Verificar se o usuário já existe
        const usuarioExistente = await prisma.usuarioMobile.findUnique({
            where: { matricula: '123456' }
        });

        if (!usuarioExistente) {
            // Criar um novo usuário
            const senhaHash = await bcrypt.hash('senha123', 10);

            const usuario = await prisma.usuarioMobile.create({
                data: {
                    matricula: '123456',
                    nome: 'Usuário Teste',
                    email: 'teste@email.com',
                    senha: senhaHash,
                    funcao: 'Técnico',
                    ativo: true
                }
            });

            console.log('Usuário criado com sucesso:', usuario);
        } else {
            console.log('Usuário já existe:', usuarioExistente);
        }
    } catch (error) {
        console.error('Erro ao executar seed:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    }); 