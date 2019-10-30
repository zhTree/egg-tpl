module.exports = {
  pagination(query) {
    let { page, pageSize } = query;
    page = page == undefined ? 1 : parseInt(page);
    pageSize = pageSize == undefined ? 10 : parseInt(pageSize);
    return {
      limit: pageSize,
      offset: pageSize * (page - 1)
    };
  },
  where(query, fields) {
    const where = {};
    for (const key of fields) {
      if (query[key]) where[key] = query[key];
    }
    return where;
  }
};
