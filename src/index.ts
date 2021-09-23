import Koa from 'koa';
import BodyParser from 'koa-bodyparser';

import { db } from './database/db';

import { PORT } from './configs/environment';

import CountriesRoutes from './routes/Countries';
import CitiesRoutes from './routes/Cities';

const server = new Koa();

server.use(BodyParser());

server.use(CitiesRoutes.routes());
server.use(CountriesRoutes.routes());

server.listen(PORT, async () => {
  await db.sync();
  console.log('SERVER STARTED');
});
