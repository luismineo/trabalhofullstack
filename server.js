const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(express.json());
app.options('*', cors());
app.use('/api', routes);

app.use(cors({
    origin: 'http://localhost:5500/',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})
