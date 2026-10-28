
const express = require('express');
const pedidoRoutes = require('./routes/pedidoRoutes');
const { errorHandler } = require('./middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/pedidos', pedidoRoutes);

// Tratamento de rotas inexistentes.
app.use((req, res) => {
  res.status(404).json({
    erro: 'Rota não encontrada.'
  });
});

// Middleware centralizado de tratamento de erros.
app.use(errorHandler);

app.listen(PORT, function () {
  console.log('Servidor rodando na porta ' + PORT);
});

module.exports = app;
