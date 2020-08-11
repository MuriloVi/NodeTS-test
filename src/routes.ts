import express from 'express'
import ClassesContorller from './controllers/ClassesController'
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router()
const classesController = new ClassesContorller();
const connectionsController = new ConnectionsController();

routes.post('/classes', classesController.create)
routes.get('/classes', classesController.index  )


routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)


export default routes;