const userService = require("../service/userService");

exports.getUser = (req, res) => {
  const resp = userService.getUser();
  res.send(`${resp}`);
};
exports.createUser = (req, res) => {
  res.send("Create a User success!");
};
