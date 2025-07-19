require('dotenv').config(); // Carregar variáveis de ambiente do arquivo .env na mesma pasta que o server.js
const express = require('express');
const oracledb = require('oracledb');
const cors = require('cors');
const app = express();
const port = 3001;

// Configuração do CORS
app.use(cors({
  origin: "http://localhost:8080" // Permite requisições apenas do frontend local
}));
app.use(express.json()); // Parse JSON no corpo da requisição

// Verificar se as variáveis de ambiente estão sendo carregadas corretamente
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_CONNECT_STRING:', process.env.DB_CONNECT_STRING);
console.log('DB_WALLET_PATH:', process.env.DB_WALLET_PATH);

// Configurações de conexão com o Oracle Autonomous Database
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectString: process.env.DB_CONNECT_STRING,
  wallet: process.env.DB_WALLET_PATH,  // Caminho do arquivo wallet
};

// Rota para inserir dados no banco de dados
app.post('/SOLICITACOES_ORCAMENTO', async (req, res) => {
  const { name, email, company, phone, message } = req.body;

  // Log para verificar os dados recebidos
  console.log('Dados recebidos no backend:', { name, email, company, phone, message });

  // Verificar se todos os campos estão presentes
  if (!name || !email || !company || !phone || !message) {
    console.error('Erro: Campos obrigatórios faltando');
    return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
  }

  try {
    const connection = await oracledb.getConnection(dbConfig);

    // Consulta SQL ajustada com os nomes corretos das colunas em português
    const query = `
      INSERT INTO SOLICITACOES_ORCAMENTO (nome, email, empresa, telefone, mensagem)
      VALUES (:nome, :email, :empresa, :telefone, :mensagem)
    `;

    // Executar a consulta no banco de dados com os valores recebidos
    await connection.execute(query, {
      nome: name,
      email: email,
      empresa: company,
      telefone: phone,
      mensagem: message
    }, {
      autoCommit: true, // Confirma a inserção automaticamente
    });

    // Resposta sendo enviada no formato JSON
    const responseMessage = { message: 'Orçamento solicitado com sucesso!' };
    console.log('Resposta sendo enviada (JSON):', responseMessage); // Log da resposta antes de enviar
    res.setHeader('Content-Type', 'application/json'); // Garantindo que o tipo de conteúdo seja JSON
    return res.status(200).json(responseMessage); // Retorna JSON de sucesso

  } catch (error) {
    console.error('Erro ao processar a solicitação:', error.message);
    const errorMessage = { message: `Erro ao processar a solicitação: ${error.message}` };
    console.log('Erro resposta sendo enviada (JSON):', errorMessage); // Log do erro antes de enviar
    res.setHeader('Content-Type', 'application/json'); // Garantindo que o tipo de conteúdo seja JSON
    return res.status(500).json(errorMessage); // Retorna JSON de erro
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});