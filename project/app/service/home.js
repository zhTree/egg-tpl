'use strict';

const Service = require('egg').Service;
const MIXINS = require('./mixins');
const Op = require('sequelize').Op;

class HomeService extends Service {
  constructor(ctx) {
    super(ctx);
    Object.assign(this, MIXINS);
    this.model = {
      /**
       * user: ctx.model.User
       */
    };
  }

}

module.exports = HomeService;