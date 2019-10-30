'use strict';

const Controller = require('egg').Controller;
const MIXINS = require('./mixins');

class HomeController extends Controller {
  constructor(ctx) {
    super(ctx);
    Object.assign(this, MIXINS);
  }

  async index() {
    const { ctx } = this;
    ctx.body = 'hi';
  }

  async ping() {
    this.success('i am ok');
  }

}

module.exports = HomeController;
