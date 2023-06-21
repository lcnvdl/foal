import { Context, Get, HttpResponseOK } from 'foalts2-core';

export class ApiController {

  @Get('/')
  index(ctx: Context) {
    return new HttpResponseOK('Hello world!');
  }

}
