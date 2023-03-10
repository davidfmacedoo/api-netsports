const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./database')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const produtosRouter = require('./produtosRouter');

app.use('/produtos', produtosRouter);


app.listen(3000, () => {

  sequelize.sync({ alter: true })
    .then(() => {
      console.log('Modelo sincronizado com o banco de dados');
    })
    .catch((error) => {
      console.error('Erro ao sincronizar modelo com o banco de dados:', error);
    });
});