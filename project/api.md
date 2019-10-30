# 接口文档

### Response 统一格式

```javascript
{
    "code": 0,  // 状态码, 0:正常, 其他:异常
    "data": {}    // 操作成功data内容 对应下列文档返回的内容
    "msg": "err", // 操作失败错误信息
}
```

> /ping 同一用户重复进线率

##### 入参：
| Attribute | Type | Required | Description |
| :- | :- | :- | :- |
| - | - | - | - |


##### 成功返回data：

```javascript
{
  data: 'i am ok'
}
```

