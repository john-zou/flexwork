const knex = require('./mysqlDB');

module.exports = {
  insertUser: function (userIn) {
    return knex("user").insert(userIn).then(() => {
      return knex("user").select("StaffId").where(userIn);
    });
  },

  findUser: function (email) {
    return knex("user").select("*").where("email", "=", email);
  }
}