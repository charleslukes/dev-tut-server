module.exports.articleResolver = {
  Query: {
    getArticles: () => {
      return [{ id: 1, writter: { firstname: "Amara", id: 4 } }];
    }
  }
};
