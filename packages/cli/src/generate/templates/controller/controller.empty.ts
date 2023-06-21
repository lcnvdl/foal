import { Context, Get, HttpResponseOK } from 'foalts2-core';

export class /* upperFirstCamelName */Controller {

  @Get('/')
  foo(ctx: Context) {
    return new HttpResponseOK();
  }

}
