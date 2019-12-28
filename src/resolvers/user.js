module.exports.userResolver = {
  Query: {
    getUsers: () => {
      return [
        { id: 3, firstname: "Charles", lastname: "Chiakwa", country: "Nigeria" }
      ];
    }
  }
};
