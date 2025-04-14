import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'API Sympla funcionando!' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});