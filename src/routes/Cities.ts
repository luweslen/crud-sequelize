import Router from 'koa-router';
import CitiesController from '../controllers/Cities';

const routes: Router = new Router();

routes.post('/cities', CitiesController.create);
routes.put('/cities/:id', CitiesController.update);
routes.delete('/cities/:id', CitiesController.delete);
routes.get('/cities', CitiesController.getAll);
routes.get('/cities/:id', CitiesController.getOne);

export default routes;
