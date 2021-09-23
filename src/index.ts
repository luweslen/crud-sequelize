import Koa from 'koa';
import BodyParser from 'koa-bodyparser';

import { DATABASE_URL, PORT } from './configs/environment';

import CountriesRoutes from './routes/Countries';
import CitiesRoutes from './routes/Cities';

const server = new Koa();

server.use(BodyParser());

server.use(CitiesRoutes.routes());
server.use(CountriesRoutes.routes());

console.log(DATABASE_URL);

server.listen(PORT, () => console.log('SERVER STARTED'));
