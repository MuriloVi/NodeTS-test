import express, { request } from 'express'
import cors from 'cors'
import routes from './routes';

const app = express();

app.use(cors())

app.use(express.json())

//Métodos
//GET: buscar uma informação
//POST: criar alguma nova informação no back
//PUT:Atualizar uma informação existente
//DELETE: Deletar uma informação existente

// Corpo (Request Body): Dados para a criação ou atualização de um registro
// Route Params: Indentificar qual recurso quero atualizar ou deletar
//Query Params: usado principalmente em listagem, paginação, filtros, ordenação


// Ctrl + Shift + L
app.use(routes)

app.listen(3333);
