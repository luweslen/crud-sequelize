import Router from 'koa-router';
import CountriesController from '../controllers/Countries';

const routes: Router = new Router();

routes.post('/countries', CountriesController.create);
routes.put('/countries/:id', CountriesController.update);
routes.delete('/countries/:id', CountriesController.delete);
routes.get('/countries', CountriesController.getAll);
routes.get('/countries/:id', CountriesController.getOne);

export default routes;
