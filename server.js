const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let series = [];

const popularSeries = [
    "Stranger Things",
    "Game of Thrones",
    "The Office",
    "Breaking Bad",
    "Friends"
];

app.get('/series', (req, res) => {
    res.json(series);
});

app.get('/popular', (req, res) => {
    res.json(popularSeries);
});

app.post('/series', (req, res) => {
    const { id, title, description, status } = req.body;

    if (typeof id !== 'number' || typeof title !== 'string' || typeof description !== 'string' || typeof status !== 'boolean') {
        return res.status(400).json({ error: 'Dados inválidos' });
    }

    const newSeries = { id, title, description, status };
    series.push(newSeries);
    res.status(201).json(newSeries);
});

app.listen(PORT, () => {
    console.log('Servidor rodando')
});