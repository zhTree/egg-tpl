'use strict';

module.exports = appInfo => {
  const config = {};

  config.sequelize = {
    datasources: [
      {
        dialect: 'mysql',
        host: '',
        port: 3306,
        database: '',
        username: '',
        password: '',
        timezone: '+08:00'
      }
    ]
  };
  

  config.logger = {
    dir: '/data/logs'
  };
  
  return {
    ...config
  }
}