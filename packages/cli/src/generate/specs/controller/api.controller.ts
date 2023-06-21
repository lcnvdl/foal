// 3p
import { MyController, MyController2, TestFooBarController } from './api';
import { controller } from 'foalts2-core';

export class ApiController {
  subControllers = [
    controller('/', MyController),
    controller('/', MyController2),
    controller('/test-foo-bar', TestFooBarController)
  ];
}
