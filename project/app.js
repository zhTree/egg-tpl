class AppBootHook {
  constructor(app) {
    this.app = app;
    this.app.logger.debug('app boot');
  }

  async didLoad() {
    this.app.logger.info('app did load');
  }

  async didReady() {
    this.app.logger.info('app did ready');
    this.initRelation();
    this.initValidate();
  }

  initValidate() {
    const app = this.app;
    /**
     * 添加自定义的validate
     */
    app.validator.addRule('numberString', (rule, value) => {
      const reg = /^[0-9]+$/;
      if (!reg.test(value)) {
        return 'param should be a number';
      }
    });
  }

  initRelation() {
    const app = this.app;
    /**
     * 添加模型关联
     */
    // app.model.A.belongsTo(app.model.B, {
    //   foreignKey: 'id',
    //   targetKey: 'id',
    //   as: 'c'
    // });
  }
}

module.exports = AppBootHook;