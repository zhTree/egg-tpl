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
    app.validator.addRule('numberString', (rule, value) => {
      const reg = /^[0-9]+$/;
      if (!reg.test(value)) {
        return 'param should be a number';
      }
    });
  }

  initRelation() {
    const app = this.app;
    app.model.KefuConclusion.belongsTo(app.model.KefuCategory, {
      foreignKey: 'catId',
      targetKey: 'id',
      as: 'categoryDetail'
    });
  }
}

module.exports = AppBootHook;