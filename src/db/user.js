const pool = require("./index");

// create a user
const createUser = async (firstname, lastname, email, country, password) => {
  try {
    const user = await pool.query(
      "INSERT INTO users (firstname, lastname, email, country, password) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [firstname, lastname, email, country, password]
    );
    console.log(user);
    return user.rows[0];
  } catch (error) {
    console.log(error);
    return error;
  }
};

//get all users
const getAllUsers = async () => {
  try {
    const users = await pool.query("SELECT * FROM users");

    return users.rows;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// get a single user
const getUser = async id => {
  try {
    const user = await pool.query("SELECT * FROM users WHERE id = $1", [id]);

    return user.rows[0];
  } catch (error) {
    console.log(error);
    return error;
  }
};

// update a user
const updateUser = async (firstname, lastname, email, country, id) => {
  try {
    const user = await pool.query(
      "UPDATE users SET firstname = $1, lastname = $2, email = $3, country = $4 WHERE id = $5 RETURNING *",
      [firstname, lastname, email, country, id]
    );
    console.log(user);
    return user.rows[0];
  } catch (error) {
    console.log(error);
    return error;
  }
};

// delete a user
const deleteUser = async id => {
  try {
    const user = await pool.query(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [id]
    );

    return user.rows[0];
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser
};
