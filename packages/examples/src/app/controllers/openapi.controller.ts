import { SwaggerController } from 'foalts2-swagger';
import { ProfileController } from './profile.controller';

export class OpenapiController extends SwaggerController {

  options = {
    controllerClass: ProfileController
  };

}
