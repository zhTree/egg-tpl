/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1571630743077_2024';

  // add your middleware config here
  config.middleware = ['errorHandler'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: []
  };

  config.logger = {
    level: 'INFO',
    consoleLevel: 'DEBUG'
  };

  config.sequelize = {
    datasources: [
      // {
      //   dialect: 'mysql',
      //   host: '',
      //   port: 3306,
      //   database: '',
      //   username: '',
      //   password: '',
      //   timezone: '+08:00'
      // }
    ]
  };

  // cors
  config.cors = {
    origin: ctx => ctx.get('origin'),
    allowMethods: 'POST, GET, OPTIONS'
  }

  return {
    ...config,
    ...userConfig,
  };
};
