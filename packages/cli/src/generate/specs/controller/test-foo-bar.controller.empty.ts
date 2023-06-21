import { Context, Get, HttpResponseOK } from 'foalts2-core';

export class TestFooBarController {

  @Get('/')
  foo(ctx: Context) {
    return new HttpResponseOK();
  }

}
