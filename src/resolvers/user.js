const {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  userSignIn
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
      const { firstname, lastname, email, country, password } = args;
      const data = createUser(firstname, lastname, email, country, password);

      return data;
    },
    signInUser: (_, args) => {
      const { email, password } = args;
      return userSignIn(email, password);
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
