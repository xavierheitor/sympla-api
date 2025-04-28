import { PrismaClient } from '@prisma/client';

declare global {
    // Isso evita erro de redefinição de tipos no TypeScript
    var prisma: PrismaClient | undefined;
}

export const prisma = globalThis.prisma ?? new PrismaClient({
    log: ['query', 'info', 'warn', 'error'], // Opcional: remove se não quiser logs no terminal
});

if (process.env.NODE_ENV !== 'production') {
    globalThis.prisma = prisma;
}