const CONSTANT_OBJECT = require('../const');

module.exports = {
  ...CONSTANT_OBJECT,
  
  rules: {
    page: { type: 'numberString', required: false },
    pageSize: { type: 'numberString', required: false }
  },

  success(data) {
    this.ctx.body = {
      code: this.SUCCESS,
      data
    };
  },

  fail(data) {
    this.ctx.body = {
      code: this.FAIL,
      message: data
    };
  },

  handleInsertService(ret) {
    // 插入成功
    if (ret[1]) {
      this.success(ret[0]);
      return true;
    } else /* 数据重复 */{
      this.fail();
      return false;
    }
  },

  handleUpdateService(ret) {
    // 更新成功
    if (ret[0] == 1) {
      this.success();
      return true;
    } else /* 更新失败 */{
      this.fail('更新失败');
      return false;
    }
  },

  validateParams(rules = this.rules, obj = this.ctx.request.body) {
    this.ctx.validate(rules, obj);
    return obj;
  }

};