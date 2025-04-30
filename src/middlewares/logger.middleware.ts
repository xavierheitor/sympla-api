import { Request, Response, NextFunction } from 'express';

export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();
    const chunks: any[] = [];

    // Ignorar favicon
    if (req.path === '/favicon.ico') return next();

    console.log('\n🟡 [REQUEST INICIADA]');
    console.log(`🔹 Método: ${req.method}`);
    console.log(`🔹 URL: ${req.originalUrl}`);
    console.log(`🔹 IP: ${req.ip}`);
    console.log('🔹 Headers:', req.headers);

    if (req.body && Object.keys(req.body).length > 0) {
        console.log('🔹 Body:', req.body);
    }

    // Intercepta o write para capturar resposta
    const originalWrite = res.write;
    const originalEnd = res.end;

    res.write = function (chunk: any, encoding?: BufferEncoding | ((error: Error | null | undefined) => void), callback?: (error: Error | null | undefined) => void) {
        chunks.push(Buffer.from(chunk));
        return originalWrite.call(res, chunk, encoding as BufferEncoding, callback);
    };

    res.end = function (chunk?: any, encoding?: BufferEncoding | (() => void), callback?: () => void) {
        if (chunk) {
            chunks.push(Buffer.from(chunk));
        }

        const responseBody = Buffer.concat(chunks).toString('utf8');
        const duration = Date.now() - start;

        console.log(`\n🟢 [RESPONSE FINALIZADA]`);
        console.log(`🔸 Status: ${res.statusCode}`);
        console.log(`🔸 Tempo: ${duration}ms`);
        if (responseBody) {
            try {
                const parsed = JSON.parse(responseBody);
                console.log('🔸 Body:', parsed);
            } catch {
                console.log('🔸 Body (raw):', responseBody);
            }
        }

        return originalEnd.call(res, chunk, encoding as BufferEncoding, callback);
    };

    next();
};