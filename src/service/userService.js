const userRepo = require("../repo/userRepo");

exports.getUser = () => {
  const dataUser = userRepo.getUser();

  return dataUser;
};
