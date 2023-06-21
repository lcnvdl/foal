import { controller, IAppController } from 'foalts2-core';
import { createConnection } from 'typeorm';

import { ApiController } from './controllers';

export class AppController implements IAppController {
  subControllers = [
    controller('/api', ApiController),
  ];

  async init() {
    await createConnection();
  }
}
