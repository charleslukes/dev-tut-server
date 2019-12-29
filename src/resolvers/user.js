const {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser
} = require("../db/user");

module.exports.userResolver = {
  Query: {
    getUser: (_, args) => {
      const { id } = args;
      return getUser(id);
    },
    getUsers: () => {
      return getAllUsers();
    }
  },

  Mutation: {
    createUser: (_, args) => {
      const { firstname, lastname, email, country } = args;
      const data = createUser(firstname, lastname, email, country);

      return data;
    },

    updateUser: (_, args) => {
      const { firstname, lastname, email, country, id } = args;
      return updateUser(firstname, lastname, email, country, id);
    },

    deleteUser: (_, args) => {
      const { id } = args;

      return deleteUser(id);
    }
  }
};
